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
import java.util.Arrays;
import java.util.Properties;

/**
 * Angboot util.
 */
public final class AngBootUtil {

   /**
    * @param args command line arguments.
    */
   public static String getAngBootHome(String[] args) {
      String home = null;

      if(args != null && args.length > 0) {
         home = Arrays.asList(args)
            .stream()
            .filter(arg -> !StringUtils.isEmpty(arg) && arg.contains(AngBootUtil.ANGBOOT_HOME_KEY))
            .map(arg -> arg.split("="))
            .filter(kv -> kv != null && kv.length == 2)
            .map(kv -> kv[1])
            .findFirst()
            .orElse(null);
      }

      if(home == null) {
         home = System.getProperty(AngBootUtil.ANGBOOT_HOME_KEY);
      }

      return home;
   }

   /**
    * Load properties file from <b>parentPath/propName</b>.
    *    if not exist, from clazz path load properties.
    * @param parentPath parent path. <b>nullable</b>.
    * @param propName properties file name.
    */
   public static Properties loadProperties(String parentPath,
                                           String propName)
   {
      if(StringUtils.isEmpty(propName)) {
         LOGGER.info("Load properties file is null.");
         return null;
      }

      String fullPath = propName;

      if(!StringUtils.isEmpty(parentPath)) {
         fullPath = propName.startsWith(File.separator)
            ? parentPath + propName
            : parentPath + File.separator + propName;
      }

      return AngBootUtil.loadProperties(fullPath);
   }

   public static Properties loadProperties(String fullPath) {
      File propFile = FileSystemService.getInstance().getFile(fullPath);

      if(!propFile.exists()) {
         return new Properties();
      }

      return AngBootUtil.loadProperties(propFile);
   }

   public static Properties loadProperties(File propFile) {
      Properties properties = new Properties();
      InputStream inp = null;

      try {
         inp = new FileInputStream(propFile);
      }
      catch(IOException ignore) {
         LOGGER.error("Found {} failed.", propFile.getAbsolutePath());
      }

      try {
         if(inp != null) {
            properties.load(inp);
            inp.close();
         }
      }
      catch (Exception e) {
         e.printStackTrace();
      }

      return properties;
   }

   public static final String ANGBOOT_HOME_KEY = "angboot.home";

   private static final Logger LOGGER = LoggerFactory.getLogger(AngBootUtil.class);
}
