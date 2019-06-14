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
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

/**
 * Security Configuration.
 */
@EnableWebSecurity
public class AngBootSecurityConfiguration extends WebSecurityConfigurerAdapter {

   @Autowired
   public AngBootSecurityConfiguration(UserDao userDao, RoleDao roleDao) {
      this.userDao = userDao;
      this.roleDao = roleDao;
   }

   @Override
   protected void configure(HttpSecurity http) throws Exception {
      http.authorizeRequests()
         .antMatchers("/").permitAll() // index page for all users.
         .antMatchers("/index.html").permitAll()
         .antMatchers("/api/**").permitAll()
         .antMatchers("/app/portal/**").permitAll()
         .antMatchers("/app/em/**").hasAnyRole("Administrator");

      http.formLogin()
         .usernameParameter("username")
         .passwordParameter("pwd")
         .loginPage("/userlogin");

      http.logout().logoutSuccessUrl("/");

      http.csrf().disable();
   }

   @Override
   protected void configure(AuthenticationManagerBuilder auth) throws Exception {
   }

   private final UserDao userDao;
   private final RoleDao roleDao;

   private static final Logger LOGGER = LoggerFactory.getLogger(AngBootSecurityConfiguration.class);
}
