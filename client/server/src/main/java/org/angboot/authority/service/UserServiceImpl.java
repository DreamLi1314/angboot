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

package org.angboot.authority.service;

import org.angboot.authority.UserService;
import org.angboot.authority.dao.UserDao;
import org.angboot.domain.User;
import org.angboot.util.conditional.ConditionalOnOuterAuthorityDisabled;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheConfig;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.context.annotation.Conditional;
import org.springframework.stereotype.Service;

import java.util.List;

@Conditional(ConditionalOnOuterAuthorityDisabled.class)
@Service("userService")
@CacheConfig(cacheNames="angboot-user")
public class UserServiceImpl implements UserService {

   @Autowired
   @SuppressWarnings("all")
   public UserServiceImpl(UserDao userDao) {
      this.userDao = userDao;
   }

   @Override
   @Cacheable(key = "#id")
   public User getUserById(Integer id) {
      return userDao.getUserById(id);
   }

   @Override
   @Cacheable(key = "#userName")
   public List<User> getUserByName(String userName) {
      return this.userDao.getUserByName(userName);
   }

   private final UserDao userDao;
}
