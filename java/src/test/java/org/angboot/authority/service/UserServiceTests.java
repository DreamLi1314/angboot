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

import org.angboot.domain.User;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
@ActiveProfiles("test")
public class UserServiceTests {

   @Autowired
   private UserService userService;

   @Test
   public void testGetUserById() throws Exception {
      User user1 = userService.getUserById(1);
      User user2 = userService.getUserById(1);

      // TODO: This should check the number of method calls.
      // because deserialization will create a new object.
      Assert.assertTrue("The user2 should get from cache.", user1 == user2);
   }

}
