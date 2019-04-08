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
        String emIndexPath = "/em/index.html";

        registry.addViewController("/").setViewName(serverIndexPath);
        registry.addViewController("/login.html").setViewName("login");

        registry.addRedirectViewController("/portal", ngIndexPath);
        registry.addRedirectViewController("/portal/**", ngIndexPath);
        registry.addRedirectViewController("/em", emIndexPath);
        registry.addRedirectViewController("/em/**", emIndexPath);
    }
}
