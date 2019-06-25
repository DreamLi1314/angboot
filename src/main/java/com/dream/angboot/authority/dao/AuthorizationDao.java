package com.dream.angboot.authority.dao;

import com.dream.angboot.domain.Authorization;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface AuthorizationDao {
   @Select("SELECT USERNAME, ROLE FROM T_USER_ROLE WHERE USERNAME=#{name}")
   @Results(id = "authenticationResultMap", value = {
      @Result(column="USERNAME", property="name"),
      @Result(column="ROLE", property="authority")
   })
   public List<Authorization> getAuthenticationByName(String name);
}
