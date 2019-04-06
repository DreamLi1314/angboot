package com.dream.angboot.dao;

import com.dream.angboot.domain.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface UserDao {

    @Select("SELECT * FROM T_USER  where id=#{id}")
    User getUserById(Integer id);

}
