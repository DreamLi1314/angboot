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
import org.springframework.util.StringUtils;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Hashtable;
import java.util.Properties;

public class AngBootEnv {
   /**
    * Gets the internal property map.
    *
    * @return the properties.
    */
   public static Properties getInternalProperties() {
      return (Properties)
         ConfigurationContext.getContext().get(PROPERTIES_KEY);
   }

   /**
    * Clear and reload the properties.
    */
   public static synchronized void clear() {
      ConfigurationContext.getContext().remove(PROPERTIES_KEY);
   }

   /**
    * Initialize the properties with the specific location of
    * stylereport.properties or .stylereport. This is called automatically
    * before any method in this class is used for the first time.
    */
   static synchronized void init() {
      if(getInternalProperties() != null) {
         return;
      }

      String configHome =
         ConfigurationContext.getContext().getHome();

      Properties angBootProperties
         = AngBootUtil.loadProperties(configHome, "angboot.properties");
      Properties defaultProperties
         = AngBootUtil.loadProperties(
            AngBootEnv.class.getResource("/config").getPath(), "default.properties");

      putProperties(new DefaultProperties(angBootProperties, defaultProperties));
   }

   /**
    * Put properties.
    */
   private static void putProperties(Properties prop) {
      ConfigurationContext.getContext().put(PROPERTIES_KEY, prop);
   }

   /**
    * Get a property value.
    */
   public static String getProperty(String name) {
      init();

      Properties prop = getInternalProperties();
      String val = prop.getProperty(name);

      return val;
   }

   /**
    * Get a property value with a default if the property is not defined.
    */
   public static String getProperty(String name, String defaultValue) {
      String val = AngBootEnv.getProperty(name);

      if(val == null) {
         val = defaultValue;
      }

      return val;
   }

   /**
    * Get a property as a boolean value.
    */
   public static Boolean getBoolean(String name) {
      String str = getProperty(name);
      Boolean val = false;

      if(!StringUtils.isEmpty(str)) {
         val = (Boolean) cache.get(name);

         if(val == null) {
            cache.put(name, val = Boolean.valueOf(str));
         }
      }

      return val;
   }

   private static Hashtable cache = new Hashtable(); // cached objects

   private static final String PROPERTIES_KEY = AngBootEnv.class.getName() + ".properties";

   private static final Logger LOGGER = LoggerFactory.getLogger(AngBootEnv.class);
}
