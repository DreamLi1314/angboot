package com.dream.angboot.authority.service;

import com.dream.angboot.domain.User;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
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
