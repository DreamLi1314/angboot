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

package org.angboot.util.db;

import org.angboot.util.AngBootUtil;
import org.angboot.util.ConfigurationContext;
import org.angboot.util.FileSystemService;
import org.angboot.util.SingletonManager;

import java.io.File;
import java.util.Properties;

public class DBConfig {

   public DBConfig() {
      String home = ConfigurationContext.getContext().getHome();
      String dbPropFullPath = home + File.separator + DB_PROPERTIES_NAME;

      File dbPropFile = FileSystemService.getInstance().getFile(dbPropFullPath);

      if(!dbPropFile.exists()) {
         // TODO create file; init database.
      }

      this.dbProperties = AngBootUtil.loadProperties(dbPropFile);
   }

   public static DBConfig getDBConfig() {
      return SingletonManager.getInstance(DBConfig.class);
   }

   public static synchronized void reset() {
      SingletonManager.reset(DBConfig.class);
   }

   public Properties getDbProperties() {
      return dbProperties;
   }

   private Properties dbProperties;

   private static final String DB_PROPERTIES_NAME = "datasource.properties";
}
