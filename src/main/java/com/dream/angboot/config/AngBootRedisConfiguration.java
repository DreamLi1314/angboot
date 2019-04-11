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

package com.dream.angboot.config;

import com.dream.angboot.domain.User;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.data.redis.cache.RedisCacheConfiguration;
import org.springframework.data.redis.cache.RedisCacheManager;
import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.serializer.Jackson2JsonRedisSerializer;
import org.springframework.data.redis.serializer.RedisSerializationContext;

import java.time.Duration;

@Configuration
public class AngBootRedisConfiguration {

   @Bean
   public Jackson2JsonRedisSerializer<User> userJackson2JsonRedisSerializer() {
      return new Jackson2JsonRedisSerializer(User.class);
   }

   @Bean
   public Jackson2JsonRedisSerializer<Object> objectJackson2JsonRedisSerializer() {
      return new Jackson2JsonRedisSerializer(Object.class);
   }

   @Bean
   public RedisTemplate<Object, User> userRedisTemplate(
         RedisConnectionFactory redisConnectionFactory,
         Jackson2JsonRedisSerializer<User> serializer)
   {
      RedisTemplate<Object, User> template = new RedisTemplate<>();
      template.setConnectionFactory(redisConnectionFactory);

      template.setDefaultSerializer(serializer);

      return template;
   }

   @Bean
   public RedisTemplate<Object, Object> objectRedisTemplate(
         RedisConnectionFactory redisConnectionFactory,
         Jackson2JsonRedisSerializer<Object> serializer)
   {
      RedisTemplate<Object, Object> template = new RedisTemplate<>();
      template.setConnectionFactory(redisConnectionFactory);

      template.setDefaultSerializer(serializer);

      return template;
   }

   @Bean
   public RedisCacheManager userCacheManager(
         RedisConnectionFactory redisConnectionFactory,
         Jackson2JsonRedisSerializer<User> serializer)
   {
      RedisSerializationContext.SerializationPair<User> serializationPair
            = RedisSerializationContext.SerializationPair.fromSerializer(serializer);
      RedisCacheManager.RedisCacheManagerBuilder builder = RedisCacheManager
            .builder(redisConnectionFactory)
            .cacheDefaults(
                  RedisCacheConfiguration.defaultCacheConfig()
                        .entryTtl(Duration.ofDays(1))
                        .serializeValuesWith(serializationPair)
            );

      return builder.build();
   }

   @Bean
   @Primary
   public RedisCacheManager objectCacheManager(
         RedisConnectionFactory redisConnectionFactory,
         Jackson2JsonRedisSerializer<Object> serializer)
   {
      RedisSerializationContext.SerializationPair<Object> serializationPair
            = RedisSerializationContext.SerializationPair.fromSerializer(serializer);
      RedisCacheManager.RedisCacheManagerBuilder builder = RedisCacheManager
            .builder(redisConnectionFactory)
            .cacheDefaults(
                  RedisCacheConfiguration.defaultCacheConfig()
                        .entryTtl(Duration.ofDays(1))
                        .serializeValuesWith(serializationPair)
            );

      return builder.build();
   }
}
