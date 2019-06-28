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

package com.angboot.authority.dao;

import com.angboot.domain.User;
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
      System.out.println(dataSource.getConnection().getCatalog());

      User user = userDao.getUserById(1);

      System.out.println(user);
   }
}
