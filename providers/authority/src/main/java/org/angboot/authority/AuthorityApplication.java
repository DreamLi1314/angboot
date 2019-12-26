package org.angboot.authority;

import org.apache.dubbo.config.spring.context.annotation.EnableDubbo;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@EnableDubbo
@SpringBootApplication
public class AuthorityApplication {

   public static void main(String[] args) {
      SpringApplication.run(AuthorityApplication.class, args);
   }

}
