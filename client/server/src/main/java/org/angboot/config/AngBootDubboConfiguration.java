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

package org.angboot.config;

import org.angboot.constants.security.SecurityConstant;
import org.angboot.util.AngBootEnv;
import org.angboot.util.conditional.ConditionalOnOuterAuthorityEnabled;
import org.angboot.util.conditional.ConditionalOnScheduleStarted;
import org.apache.dubbo.config.ApplicationConfig;
import org.apache.dubbo.config.RegistryConfig;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Conditional;
import org.springframework.context.annotation.Configuration;
import org.springframework.util.StringUtils;

@Configuration
@Conditional({
   ConditionalOnOuterAuthorityEnabled.class,
   ConditionalOnScheduleStarted.class
})
public class AngBootDubboConfiguration {
   @Bean
   public ApplicationConfig applicationConfig() {
      ApplicationConfig application = new ApplicationConfig();
      application.setName(AngBootEnv.getProperty(SecurityConstant.DUBBO_CLIENT_NAME_KEY));

      return application;
   }

   @Bean
   public RegistryConfig registryConfig() {
      RegistryConfig registry = new RegistryConfig();
      registry.setAddress(AngBootEnv.getProperty(SecurityConstant.DUBBO_REGISTRY_ADDRESS_KEY));

      if(StringUtils.hasText(AngBootEnv.getProperty(SecurityConstant.DUBBO_REGISTRY_USERNAME_KEY))) {
         registry.setUsername(AngBootEnv.getProperty(SecurityConstant.DUBBO_REGISTRY_USERNAME_KEY));
         registry.setPassword(AngBootEnv.getProperty(SecurityConstant.DUBBO_REGISTRY_PASSWORD_KEY));
      }

      return registry;
   }
}
