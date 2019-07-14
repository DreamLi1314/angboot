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

package com.angboot.config;

import com.alibaba.druid.pool.DruidDataSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.util.ResourceUtils;

import javax.sql.DataSource;
import java.io.File;
import java.io.FileInputStream;
import java.util.Properties;

@Configuration
@Profile("test")
public class TestDatasourceConfig {

   @Bean
   public DataSource dataSource() throws Exception {
      DruidDataSource druid = new DruidDataSource();
      File dbPropFile
         = ResourceUtils.getFile(ResourceUtils.CLASSPATH_URL_PREFIX + "config/test_datasource.properties");

      try(FileInputStream in = new FileInputStream(dbPropFile)) {
         Properties dbProp = new Properties();
         dbProp.load(in);
         druid.configFromPropety(dbProp);
      }
      catch (Exception e) {
         e.printStackTrace();
      }

      return druid;
   }

}
