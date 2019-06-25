package com.dream.angboot.authority.service;

import com.dream.angboot.authority.dao.AuthorizationDao;
import com.dream.angboot.domain.Authorization;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheConfig;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@CacheConfig(cacheNames="angboot-authorization")
public class AuthorizationService {

   @Autowired
   @SuppressWarnings("all")
   private AuthorizationDao authorizationDao;

   @Cacheable
   public List<Authorization> getAuthenticationByName(String name) {
      return authorizationDao.getAuthenticationByName(name);
   }
}
