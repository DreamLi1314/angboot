package com.dream.angboot;

import net.unicon.cas.client.configuration.EnableCasClient;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;

@SpringBootApplication
@MapperScan(basePackages = "com.dream.angboot.authority.dao")
@EnableCaching
//@EnableCasClient
public class AngbootApplication {

    public static void main(String[] args) {
        SpringApplication.run(AngbootApplication.class, args);
    }

}
