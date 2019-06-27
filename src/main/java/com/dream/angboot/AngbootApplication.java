package com.dream.angboot;

import org.mybatis.spring.annotation.MapperScan;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;

import java.util.Arrays;

@SpringBootApplication
@MapperScan(basePackages = "com.dream.angboot.authority.dao")
@EnableCaching
public class AngbootApplication implements ApplicationRunner {

    public static void main(String[] args) {
        System.out.println("============main======args==============" + Arrays.asList(args)
            + "====home==" + System.getProperty("angboot.home")
        );
        SpringApplication.run(AngbootApplication.class, args);
    }

    @Override
    public void run(ApplicationArguments args) throws Exception {
        logger.info("\n\n\n\n=======Application started with command-line arguments: {}", Arrays.toString(args.getSourceArgs()));
        logger.info("NonOptionArgs: {}", args.getNonOptionArgs());
        logger.info("OptionNames: {}", args.getOptionNames());

        for (String name : args.getOptionNames()){
            logger.info("arg-" + name + "=" + args.getOptionValues(name));
        }

        boolean containsOption = args.containsOption("sree.home");
        logger.info("Contains person.name: " + containsOption);
    }

    private Logger logger = LoggerFactory.getLogger(getClass());
}
