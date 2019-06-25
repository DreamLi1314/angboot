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
import com.dream.angboot.authority.model.SecurityConstant;
import org.jasig.cas.client.validation.Cas20ServiceTicketValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.cas.ServiceProperties;
import org.springframework.security.cas.authentication.CasAssertionAuthenticationToken;
import org.springframework.security.cas.authentication.CasAuthenticationProvider;
import org.springframework.security.cas.web.CasAuthenticationEntryPoint;
import org.springframework.security.cas.web.CasAuthenticationFilter;
import org.springframework.security.core.userdetails.AuthenticationUserDetailsService;
import org.springframework.security.core.userdetails.UserDetailsByNameServiceWrapper;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.security.web.authentication.logout.LogoutFilter;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;

@Configuration
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
//      casAuthenticationFilter.setServiceProperties(serviceProperties);
//      casAuthenticationFilter.setFilterProcessesUrl(this.clientProperties.getFilterProcessesUrl());
//      casAuthenticationFilter.setContinueChainBeforeSuccessfulAuthentication(false);
//      casAuthenticationFilter.setAuthenticationSuccessHandler(
//         new SimpleUrlAuthenticationSuccessHandler("/")
//      );

      return casAuthenticationFilter;
   }

   @Bean
   public CasAuthenticationEntryPoint casAuthenticationEntryPoint(ServiceProperties serviceProperties) {
      CasAuthenticationEntryPoint entryPoint = new CasAuthenticationEntryPoint();
      entryPoint.setLoginUrl(this.serverProperties.getLoginUrl());
      entryPoint.setServiceProperties(serviceProperties);

      return entryPoint;
   }

   @Bean
   public Cas20ServiceTicketValidator cas20ServiceTicketValidator() {
      return new Cas20ServiceTicketValidator(this.serverProperties.getCasServerUrlPrefix());
   }

   @Bean
   public UserDetailsByNameServiceWrapper userDetailsByNameServiceWrapper(UserDetailsService userDetailsService) {
      return new UserDetailsByNameServiceWrapper(userDetailsService);
   }

   @Bean
   public CasAuthenticationProvider casAuthenticationProvider(
      AuthenticationUserDetailsService<CasAssertionAuthenticationToken> userDetailsService,
      ServiceProperties serviceProperties,
      Cas20ServiceTicketValidator ticketValidator)
   {
      CasAuthenticationProvider provider = new CasAuthenticationProvider();
      provider.setKey(SecurityConstant.AUTHENTICATION_PROVIDER_KEY);
      provider.setServiceProperties(serviceProperties);
      provider.setTicketValidator(ticketValidator);
      provider.setAuthenticationUserDetailsService(userDetailsService);

      return provider;
   }

   @Bean
   public LogoutFilter logoutFilter() {
      String logoutRedirectPath = this.serverProperties.getLogoutUrl() + "?service=" +
         this.clientProperties.getCasClientUrlPrefix();
      LogoutFilter logoutFilter = new LogoutFilter(
         logoutRedirectPath,
         new SecurityContextLogoutHandler());
      logoutFilter.setFilterProcessesUrl(this.clientProperties.getLogoutUrl());

      return logoutFilter;
   }


}
