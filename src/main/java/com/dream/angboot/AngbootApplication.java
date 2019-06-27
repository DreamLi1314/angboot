package com.dream.angboot;

import com.dream.angboot.util.AngBootUtil;
import com.dream.angboot.util.ConfigurationContext;
import org.mybatis.spring.annotation.MapperScan;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;


@SpringBootApplication
@MapperScan(basePackages = "com.dream.angboot.authority.dao")
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
