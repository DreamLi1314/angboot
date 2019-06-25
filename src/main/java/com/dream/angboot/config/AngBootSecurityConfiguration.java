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

import com.dream.angboot.authority.dao.RoleDao;
import com.dream.angboot.authority.dao.UserDao;
import com.dream.angboot.authority.model.SecurityConstant;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.sql.DataSource;

/**
 * Security Configuration.
 */
@EnableWebSecurity
public class AngBootSecurityConfiguration extends WebSecurityConfigurerAdapter {

   @Autowired
   @SuppressWarnings("all")
   public AngBootSecurityConfiguration(UserDao userDao, RoleDao roleDao,
                                       DataSource dataSource,
                                       UserDetailsService userDetailsService)
   {
      this.userDao = userDao;
      this.roleDao = roleDao;
      this.dataSource = dataSource;
      this.userDetailsService = userDetailsService;
   }

   @Bean
   public AuthenticationManager authenticationManager() throws Exception {
      return super.authenticationManager();
   }

   @Bean
   public PasswordEncoder passwordEncoder() {
      return new BCryptPasswordEncoder();
   }

   @Override
   protected void configure(HttpSecurity http) throws Exception {
      http.authorizeRequests()
         .antMatchers("/", "/index.html").permitAll() // index page for all users.
         .antMatchers("/userlogin").permitAll() // login for all users.
         .antMatchers("/api/**").permitAll() // public api.
         .antMatchers("/app/portal/**").permitAll() // portal for all users.
         .antMatchers("/app/em/**").hasRole(SecurityConstant.ROLE_ADMIN) // EM need role.
         ;

      http.formLogin()
         .usernameParameter("username")
         .passwordParameter("pwd")
         .loginPage("/userlogin");

      http.logout().permitAll();
      http.logout().logoutSuccessUrl("/");

      http.csrf().disable();
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

   private final UserDao userDao;
   private final RoleDao roleDao;
   private final DataSource dataSource;
   private final UserDetailsService userDetailsService;

   private static final Logger LOGGER = LoggerFactory.getLogger(AngBootSecurityConfiguration.class);
}
