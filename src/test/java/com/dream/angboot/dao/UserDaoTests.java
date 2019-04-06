package com.dream.angboot.dao;

import com.dream.angboot.domain.User;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import javax.sql.DataSource;

@RunWith(SpringRunner.class)
@SpringBootTest
public class UserDaoTests {

    @Autowired
    private DataSource dataSource;

    @Autowired
    private UserDao userDao;

    @Test
    public void testGetUserById() throws Exception {

        System.out.println(dataSource);
        System.out.println(dataSource.getConnection());
        System.out.println(dataSource.getConnection().getCatalog().toString());

        User user = userDao.getUserById(1);

        System.out.println(user);
    }
}
