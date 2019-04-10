package com.dream.angboot;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;

@SpringBootApplication
@MapperScan(basePackages = "com.dream.angboot.authority.dao")
@EnableCaching
public class AngbootApplication {

    public static void main(String[] args) {
        SpringApplication.run(AngbootApplication.class, args);
    }

}
