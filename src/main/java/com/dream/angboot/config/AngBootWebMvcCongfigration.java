package com.dream.angboot.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class AngBootWebMvcCongfigration implements WebMvcConfigurer {

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        String serverIndexPath = "/index";
        String ngIndexPath = "/index.html";

        registry.addViewController("/").setViewName(serverIndexPath);
        registry.addRedirectViewController("/portal", ngIndexPath);
        registry.addRedirectViewController("/portal/**", ngIndexPath);
    }
}
