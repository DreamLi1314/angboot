package org.angboot;

import org.angboot.util.AngBootUtil;
import org.angboot.util.ConfigurationContext;
import org.mybatis.spring.annotation.MapperScan;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.quartz.QuartzAutoConfiguration;
import org.springframework.cache.annotation.EnableCaching;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@EnableCaching
@EnableSwagger2
@SpringBootApplication(exclude = {QuartzAutoConfiguration.class})
@MapperScan(basePackages = "org.angboot.authority.dao")
public class AngbootApplication {

	public static void main(String[] args) {
		String home = AngBootUtil.getAngBootHome(args);

		ConfigurationContext.getContext().setHome(home);

		LOGGER.info("AngBoot properties use {}/angboot.properties", home);

		SpringApplication.run(AngbootApplication.class, args);
	}

	private static final Logger LOGGER = LoggerFactory.getLogger(AngbootApplication.class);
}
