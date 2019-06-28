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

import com.angboot.authority.model.CasServerProperties;
import com.angboot.authority.model.SecurityConstant;
import com.angboot.util.AngBootEnv;
import com.angboot.util.ConditionalOnCasEnable;
import org.jasig.cas.client.session.SingleSignOutFilter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Conditional;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.cas.web.CasAuthenticationEntryPoint;
import org.springframework.security.cas.web.CasAuthenticationFilter;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.logout.LogoutFilter;

/**
 * Security Configuration.
 */
@EnableWebSecurity
public class AngBootSecurityConfiguration extends WebSecurityConfigurerAdapter {

   @Override
   protected void configure(HttpSecurity http) throws Exception {
      http.authorizeRequests()
         .antMatchers("/", "/index.html").permitAll() // index page for all users.
         .antMatchers(SecurityConstant.LOGIN_PAGE_URL).permitAll() // login for all users.
         .antMatchers("/api/**").permitAll() // public api.
         .antMatchers("/app/portal/**").permitAll() // portal for all users.
         .antMatchers("/app/em/**").hasRole(SecurityConstant.ROLE_ADMIN) // EM need role.
         ;

      http.formLogin()
         .usernameParameter("username")
         .passwordParameter("pwd")
         .loginPage(SecurityConstant.LOGIN_PAGE_URL);

      http.logout()
         .permitAll() // logout authority for all.
         .logoutSuccessUrl("/"); // redirect to index after logout.

      // disable csrf for 403 error.
      http.csrf().disable();

      if(AngBootEnv.getBoolean(SecurityConstant.CAS_ENABLED_KEY)) {
         LOGGER.info("######################## CAS enabled. ########################");
         // CAS Configuration
         http.exceptionHandling().authenticationEntryPoint(casAuthenticationEntryPoint);
         // 单点注销的过滤器, 必须配置在SpringSecurity的过滤器链中, 如果直接配置在Web容器中, 貌似是不起作用的.
         SingleSignOutFilter singleSignOutFilter = new SingleSignOutFilter();
         singleSignOutFilter.setCasServerUrlPrefix(this.serverProperties.getCasServerUrlPrefix());

         http.addFilter(casAuthenticationFilter(authenticationManager()))
            .addFilterBefore(logoutFilter, LogoutFilter.class)
            .addFilterBefore(singleSignOutFilter, CasAuthenticationFilter.class);
      }
   }

   @Override
   protected void configure(AuthenticationManagerBuilder auth) throws Exception {
//      auth.jdbcAuthentication()
//         .dataSource(dataSource)
//         .passwordEncoder(new BCryptPasswordEncoder())
//         .usersByUsernameQuery("SELECT name USERNAME, password PASSWORD, enable ENABLED FROM T_USER WHERE name=?")
//         .authoritiesByUsernameQuery("SELECT USERNAME, ROLE AUTHORITY FROM T_USER_ROLE WHERE USERNAME=?")
//         ;
      auth.userDetailsService(userDetailsService).passwordEncoder(passwordEncoder());
   }

   @Bean
   @Conditional(ConditionalOnCasEnable.class)
   public CasAuthenticationFilter casAuthenticationFilter(AuthenticationManager authenticationManager)
   {
      CasAuthenticationFilter casAuthenticationFilter = new CasAuthenticationFilter();
      casAuthenticationFilter.setAuthenticationManager(authenticationManager);

      return casAuthenticationFilter;
   }

   @Bean
   public PasswordEncoder passwordEncoder() {
      return new BCryptPasswordEncoder();
   }

   @Autowired
   private UserDetailsService userDetailsService;

   @Autowired(required = false)
   private LogoutFilter logoutFilter;

   @Autowired(required = false)
   private CasServerProperties serverProperties;

   @Autowired(required = false)
   private CasAuthenticationEntryPoint casAuthenticationEntryPoint;

   private static final Logger LOGGER = LoggerFactory.getLogger(AngBootSecurityConfiguration.class);
}
