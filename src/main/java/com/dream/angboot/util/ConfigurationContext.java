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

package com.dream.angboot.util;

import java.beans.PropertyChangeListener;
import java.beans.PropertyChangeSupport;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

/**
 * Class that stores information that is specific configuration home directory.
 */
@SuppressWarnings("unchecked")
public class ConfigurationContext {
   /**
    * Gets the shared instance of the configuration context.
    *
    * @return the configuration context.
    */
   public static ConfigurationContext getContext() {
      return SingletonManager.getInstance(ConfigurationContext.class);
   }

   /**
    * Gets the configuration home directory.
    *
    * @return the home directory.
    */
   public String getHome() {
      return home;
   }

   /**
    * Sets the configuration home directory.
    *
    * @param home the home directory.
    */
   public void setHome(String home) {
      String oldHome = this.home;
      this.home = home == null ? "." : home;
      support.firePropertyChange("home", oldHome, this.home);
   }

   /**
    * Gets a stored value.
    *
    * @param key the key associated with the value.
    *
    * @param <T> the type of the value.
    *
    * @return the value or <tt>null</tt> if not set.
    */
   public <T> T get(String key) {
      return (T) data.get(key);
   }

   /**
    * Sets a stored value.
    *
    * @param key   the key associated with the value.
    * @param value the value to store.
    *
    * @param <T> the type of the value.
    *
    * @return the previous value associated with the key or <tt>null</tt> if none.
    */
   public <T> T put(String key, Object value) {
      T oldValue = (T) data.put(key, value);
      support.firePropertyChange(key, oldValue, value);
      return oldValue;
   }

   /**
    * Removes a stored value.
    *
    * @param key the key associated with the value.
    *
    * @param <T> the type of the value.
    *
    * @return the value that was associated with the key or <tt>null</tt> if none.
    */
   public <T> T remove(String key) {
      T oldValue = (T) data.remove(key);
      support.firePropertyChange(key, oldValue, null);
      return oldValue;
   }

   public void addPropertyChangeListener(PropertyChangeListener listener) {
      support.addPropertyChangeListener(listener);
   }

   public void removePropertyChangeListener(PropertyChangeListener listener) {
      support.removePropertyChangeListener(listener);
   }

   public void addPropertyChangeListener(String propertyName, PropertyChangeListener listener) {
      support.addPropertyChangeListener(propertyName, listener);
   }

   public void removePropertyChangeListener(String propertyName, PropertyChangeListener listener) {
      support.removePropertyChangeListener(propertyName, listener);
   }

   private final Map<String, Object> data = new ConcurrentHashMap<>();
   private final PropertyChangeSupport support = new PropertyChangeSupport(this);
   private volatile String home = ".";
}
