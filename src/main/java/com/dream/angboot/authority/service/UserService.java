package com.dream.angboot.authority.service;

import com.dream.angboot.authority.dao.UserDao;
import com.dream.angboot.domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheConfig;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@CacheConfig(cacheNames="angboot-user")
public class UserService {

   @Autowired
   @SuppressWarnings("all")
   public UserService(UserDao userDao) {
      this.userDao = userDao;
   }

   @Cacheable(key = "#id")
   public User getUserById(Integer id) {
      return userDao.getUserById(id);
   }

   @Cacheable(key = "#userName")
   public List<User> getUserByName(String userName) {
      return this.userDao.getUserByName(userName);
   }

   private final UserDao userDao;
}
