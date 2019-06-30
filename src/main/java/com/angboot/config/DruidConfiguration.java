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

package com.angboot.config;

import com.alibaba.druid.pool.DruidDataSource;
import com.alibaba.druid.support.http.StatViewServlet;
import com.alibaba.druid.support.http.WebStatFilter;
import com.angboot.util.AngBootEnv;
import com.angboot.util.db.DBConfig;
import org.springframework.boot.autoconfigure.condition.ConditionalOnClass;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.boot.web.servlet.ServletRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.sql.DataSource;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

@Configuration
@ConditionalOnClass(DruidDataSource.class)
public class DruidConfiguration {

    @Bean
    public DataSource dataSource() {
       DruidDataSource druid = new DruidDataSource();
       druid.configFromPropety(DBConfig.getDBConfig().getDbProperties());

       return druid;
    }

    // 1. Config servlet of Druid
    @Bean
    public ServletRegistrationBean statViewServlet() {
        ServletRegistrationBean bean = new ServletRegistrationBean(
           new StatViewServlet(),
           AngBootEnv.getProperty("druid.manage.path"));

        Map<String, String> initParams = new HashMap<>(10);
        initParams.put("loginUsername", AngBootEnv.getProperty("druid.login.name"));
        initParams.put("loginPassword", AngBootEnv.getProperty("druid.login.password"));
        initParams.put("deny", "localhost"); // will pop up parse ip error.
        initParams.put("allow", "127.0.0.1");

        bean.setInitParameters(initParams);

        return bean;
    }

    // 2. Config filter of Druid
    @Bean
    public FilterRegistrationBean<WebStatFilter> statViewFilter() {
        FilterRegistrationBean<WebStatFilter> bean =
           new FilterRegistrationBean(new WebStatFilter());
        bean.setUrlPatterns(Arrays.asList("/*"));

        Map<String, String> initParams = new HashMap<>(10);

        // Don't intercept static resource.
        initParams.put("exclusions",
           "*.js, *.css, *.html," + AngBootEnv.getProperty("druid.manage.path"));

        bean.setInitParameters(initParams);

        return bean;
    }
}
