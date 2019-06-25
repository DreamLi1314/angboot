package com.dream.angboot.authority.dao;

import com.dream.angboot.domain.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface UserDao {

    @Select("SELECT * FROM T_USER  where id=#{id}")
    User getUserById(Integer id);

    @Select("SELECT name, password, enable FROM T_USER WHERE name=#{userName}")
    List<User> getUserByName(String userName);

}
