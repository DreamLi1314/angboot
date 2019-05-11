package com.dream.angboot;

import com.dream.angboot.domain.User;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.ApplicationContext;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class AngbootApplicationTests {

    @Autowired
    private ApplicationContext applicationContext;

    @Autowired
    RedisTemplate<Object, User> userRedisTemplate;

    @Test
    public void contextLoads() {
        Assert.assertNotNull("ApplicationContext has not been initialization...", applicationContext);
    }

    @Test
   public void redisTest() {
       Assert.assertNotNull("RedisTemplate has not been initialization...", userRedisTemplate);

       User user = new User();
       user.setId(1000);
       user.setName("test uName");
       user.setPassword("test pwd");

       Object key = "user:test";

       userRedisTemplate.opsForValue().set(key, user);

       User cacheUser = userRedisTemplate.opsForValue().get(key);

       Assert.assertEquals(
          "This user from cache should equals original user object...",
          user, cacheUser);

       userRedisTemplate.delete(key);

       cacheUser = userRedisTemplate.opsForValue().get(key);

       Assert.assertNull("This cache user should been remove from cache...", cacheUser);
    }

}
