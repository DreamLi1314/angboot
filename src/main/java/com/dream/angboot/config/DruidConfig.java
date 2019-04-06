package com.dream.angboot.config;

import com.alibaba.druid.pool.DruidDataSource;
import com.alibaba.druid.support.http.StatViewServlet;
import com.alibaba.druid.support.http.WebStatFilter;
import org.springframework.boot.autoconfigure.condition.ConditionalOnClass;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.boot.web.servlet.ServletRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

import javax.sql.DataSource;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

@Configuration
@ConditionalOnClass(DruidDataSource.class)
@PropertySource("classpath:config/db/datasource.properties")
public class DruidConfig {

    @Bean
    @ConfigurationProperties(prefix = "sb.datasource")
    public DataSource dataSource() {
        return new DruidDataSource();
    }

    // 1. Config servlet of Druid
    @Bean
    public ServletRegistrationBean statViewServlet() {
        ServletRegistrationBean bean = new ServletRegistrationBean(new StatViewServlet(), "/druid/*");

        Map<String, String> initParams = new HashMap<>(10);
        initParams.put("loginUsername", "admin");
        initParams.put("loginPassword", "admin");
        initParams.put("deny", "localhost");
        initParams.put("allow", "127.0.0.1");

        bean.setInitParameters(initParams);

        return bean;
    }

    // 2. Config filter of Druid
    @Bean
    public FilterRegistrationBean<WebStatFilter> statViewFilter() {
        FilterRegistrationBean<WebStatFilter> bean = new FilterRegistrationBean(new WebStatFilter());
        bean.setUrlPatterns(Arrays.asList("/*"));

        Map<String, String> initParams = new HashMap<>(10);

        // Don't intercept static resource.
        initParams.put("exclusions", "*.js, *.css, *.html, /druid/*");

        bean.setInitParameters(initParams);

        return bean;
    }

}
