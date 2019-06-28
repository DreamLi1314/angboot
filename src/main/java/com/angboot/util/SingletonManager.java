/*
 * Copyright (c) 2019, AngBoot Technology Corp, All Rights Reserved.
 *
 * The software and information contained herein are copyrighted and
 * proprietary to AngBoot Technology Corp. This software is furnished
 * pursuant to a written license agreement and may be used, copied,
 * transmitted, and stored only in accordance with the terms of such
 * license and with the inclusion of the above copyright notice. Please
 * refer to the file "COPYRIGHT" for further copyright and licensing
 * information. This software and information or any other copies
 * thereof may not be provided or otherwise made available to any other
 * person.
 */
package com.angboot.util;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
import java.lang.reflect.InvocationTargetException;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.locks.ReadWriteLock;
import java.util.concurrent.locks.ReentrantReadWriteLock;

public final class SingletonManager {
   /**
    * Gets the singleton instance of the specified type of service.
    *
    * @param type       the service class.
    * @param parameters the service creation parameters.
    *
    * @param <T> the service type.
    *
    * @return the service instance.
    */
   public static <T> T getInstance(Class<T> type, Object ... parameters) {
      return getManager().doGetInstance(type, parameters);
   }

   @SuppressWarnings({ "unchecked", "SynchronizationOnLocalVariableOrMethodParameter" })
   private <T> T doGetInstance(Class<T> type, Object... parameters) {
      Reference<T> reference = (Reference<T>) instances.get(type);

      if(reference == null) {
         synchronized(type) {
            reference = (Reference<T>) instances.get(type);

            if(reference == null) {
               resetLock.readLock().lock();

               try {
                  if(resetting) {
                     throw new IllegalStateException(
                        "Singleton manager is being reset, cannot resurrect instances");
                  }
               }
               finally {
                  resetLock.readLock().unlock();
               }

               try {
                  if(type.isAnnotationPresent(Singleton.class)) {
                     Class<? extends Reference> referenceClass =
                        type.getAnnotation(Singleton.class).value();

                     if(referenceClass != DefaultReference.class) {
                        reference = type.getAnnotation(Singleton.class).value()
                           .getConstructor().newInstance();
                     }
                  }

                  if(reference == null) {
                     reference = new DefaultReference<>(type);
                  }

                  instances.put(type, reference);
               }
               catch(NoSuchMethodException | IllegalAccessException |
                  InstantiationException e) {
                  throw new RuntimeException("Failed to create service instance", e);
               }
               catch(InvocationTargetException e) {
                  throw new RuntimeException(
                     "Failed to create service instance", e.getTargetException());
               }
            }
         }
      }

      return reference.get(parameters);
   }

   /**
    * Closes all existing singleton service instances.
    */
   public static void reset() {
      getManager().doReset();
   }

   private void doReset() {
      resetLock.writeLock().lock();

      try {
         resetting = true;

         try {
            Reference<?>[] references = instances.values().toArray(new Reference<?>[0]);

            for(Reference<?> reference : references) {
               reference.dispose();
            }

            instances.clear();
         }
         finally {
            resetting = false;
         }
      }
      finally {
         resetLock.writeLock().unlock();
      }
   }

   /**
    * Closes an existing singleton service instance.
    *
    * @param type the type of service to close.
    */
   public static void reset(Class<?> type) {
      getManager().doReset(type);
   }

   @SuppressWarnings("SynchronizationOnLocalVariableOrMethodParameter")
   private void doReset(Class<?> type) {
      synchronized(type) {
         Reference<?> reference = instances.remove(type);

         if(reference != null) {
            reference.dispose();
         }
      }
   }

   /**
    * Gets the manager for the current thread.
    *
    * @return the manager.
    */
   private static SingletonManager getManager() {
      SingletonManager manager = LOCAL_INSTANCES.get();

      if(manager == null) {
         manager = DEFAULT_INSTANCE;
      }

      return manager;
   }

   /**
    * Sets the manager to use for the current thread. This manager should be a different
    * instance than the default, global manager.
    *
    * @param manager the local manager instance or <tt>null</tt> to clear the current
    *                local manager.
    */
   public static void setLocalManager(SingletonManager manager) {
      SingletonManager oldManager = LOCAL_INSTANCES.get();

      if(oldManager != null && oldManager != manager) {
         oldManager.doReset();
         LOCAL_INSTANCES.remove();
      }

      if(manager != null) {
         LOCAL_INSTANCES.set(manager);
      }
   }

   /**
    * Determines if the current thread is using a local singleton manager instead of the
    * default, global manager.
    *
    * @return <tt>true</tt> if using a local manager; <tt>false</tt> if using the global
    *         manager.
    */
   public static boolean isLocalManager() {
      return LOCAL_INSTANCES.get() != null;
   }

   private final Map<Class<?>, Reference<?>> instances = new ConcurrentHashMap<>();
   private volatile boolean resetting = false;
   private final ReadWriteLock resetLock = new ReentrantReadWriteLock(true);

   private static final SingletonManager DEFAULT_INSTANCE = new SingletonManager();
   private static final ThreadLocal<SingletonManager> LOCAL_INSTANCES =
      new InheritableThreadLocal<>();

   private static final Logger LOG = LoggerFactory.getLogger(SingletonManager.class);

   /**
    * Annotation used to associate a reference provider with a service interface.
    */
   @Target(ElementType.TYPE)
   @Retention(RetentionPolicy.RUNTIME)
   public @interface Singleton {
      /**
       * The class responsible for managing the singleton service instance.
       */
      Class<? extends Reference> value() default DefaultReference.class;
   }

   /**
    * Interface for classes that manage a singleton service instance.
    *
    * @param <T> the service interface type.
    */
   public interface Reference<T> {
      /**
       * Gets the service instance.
       *
       * @param parameters the instance creation parameters.
       *
       * @return the service instance.
       */
      T get(Object... parameters);

      /**
       * Disposes of the service instance.
       */
      void dispose();
   }

   /**
    * Singleton reference implementation that lazily creates the service via reflection.
    *
    * @param <T> the service implementation type.
    */
   private static final class DefaultReference<T> implements Reference<T> {
      /**
       * Creates a new instance of <tt>DefaultReference</tt>.
       *
       * @param type the service class.
       */
      DefaultReference(Class<T> type) {
         this.type = type;
      }

      @Override
      public synchronized T get(Object ... parameters) {
         if(instance == null) {
            try {
               instance = type.getConstructor().newInstance();
            }
            catch(InstantiationException | IllegalAccessException |
                  NoSuchMethodException e)
            {
               throw new RuntimeException("Failed to create service instance", e);
            }
            catch(InvocationTargetException e) {
               throw new RuntimeException(
                  "Failed to create service instance", e.getTargetException());
            }
         }

         return instance;
      }

      @Override
      public synchronized void dispose() {
         if(instance instanceof AutoCloseable) {
            try {
               ((AutoCloseable) instance).close();
            }
            catch(Exception e) {
               LOG.warn("Failed to close service instance", e);
            }
         }

         instance = null;
      }

      private final Class<T> type;
      private T instance;
   }
}
