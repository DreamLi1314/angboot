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

package com.angboot;

import com.angboot.util.AngBootUtil;
import com.angboot.util.ConfigurationContext;
import org.mybatis.spring.annotation.MapperScan;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;


@SpringBootApplication
@MapperScan(basePackages = "com.angboot.authority.dao")
@EnableCaching
public class AngbootApplication {

   public static void main(String[] args) {
      String home = AngBootUtil.getAngBootHome(args);

      ConfigurationContext.getContext().setHome(home);

      LOGGER.info("AngBoot properties use {}/angboot.properties", home);

      SpringApplication.run(AngbootApplication.class, args);
   }

   private static final Logger LOGGER = LoggerFactory.getLogger(AngbootApplication.class);
}
