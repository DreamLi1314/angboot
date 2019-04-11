package com.dream.angboot.authority.service;

import com.dream.angboot.authority.dao.UserDao;
import com.dream.angboot.domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheConfig;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

@Service
@CacheConfig(cacheNames="angboot-user", cacheManager="userCacheManager")
public class UserService {

   @Autowired
   public UserService(UserDao userDao) {
      this.userDao = userDao;
   }

   @Cacheable(key = "#id")
   public User getUserById(Integer id) {
      return userDao.getUserById(id);
   }

   private final UserDao userDao;
}
