package com.dream.angboot.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class AngBootWebMvcCongfigration implements WebMvcConfigurer {

//    @Override
//    public void addResourceHandlers(ResourceHandlerRegistry registry) {
//        if(!registry.hasMappingForPattern("/**")) {
//            registry.addResourceHandler("/**")
//                    .resourceChain(false);
//        }
//    }

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        String serverIndexPath = "static/index";
        String ngIndexPath = "app/index";

        registry.addViewController("/app").setViewName(ngIndexPath);
        registry.addViewController("/app/").setViewName(ngIndexPath);
        registry.addViewController("/app/index.html").setViewName(ngIndexPath);
    }
}
