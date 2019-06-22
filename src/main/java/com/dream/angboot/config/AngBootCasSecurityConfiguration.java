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

package com.dream.angboot.config;

import com.dream.angboot.authority.model.CasClientProperties;
import com.dream.angboot.authority.model.CasServerProperties;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.cas.ServiceProperties;
import org.springframework.security.cas.web.CasAuthenticationFilter;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;

@Configuration
@EnableConfigurationProperties({CasClientProperties.class, CasServerProperties.class})
public class AngBootCasSecurityConfiguration {

   @Autowired
   private CasClientProperties clientProperties;

   @Autowired
   private CasServerProperties serverProperties;

   @Bean
   public ServiceProperties serviceProperties() {
      ServiceProperties serviceProperties = new ServiceProperties();
      serviceProperties.setService(clientProperties.getService());
      serviceProperties.setSendRenew(clientProperties.isSendRenew());

      return serviceProperties;
   }

   @Bean
   public CasAuthenticationFilter casAuthenticationFilter(AuthenticationManager authenticationManager,
                                                          ServiceProperties serviceProperties)
   {
      CasAuthenticationFilter casAuthenticationFilter = new CasAuthenticationFilter();
      casAuthenticationFilter.setAuthenticationManager(authenticationManager);
      casAuthenticationFilter.setServiceProperties(serviceProperties);
      casAuthenticationFilter.setFilterProcessesUrl(this.clientProperties.getFilterProcessesUrl());
      casAuthenticationFilter.setContinueChainBeforeSuccessfulAuthentication(false);
      casAuthenticationFilter.setAuthenticationSuccessHandler(
         new SimpleUrlAuthenticationSuccessHandler("/")
      );

      return casAuthenticationFilter;
   }


}
