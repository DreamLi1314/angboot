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

package org.angboot.config;

import org.angboot.constants.security.SecurityConstant;
import org.angboot.util.AngBootEnv;
import org.angboot.util.conditional.ConditionalOnHttpsDisabled;
import org.apache.catalina.Context;
import org.apache.tomcat.util.descriptor.web.SecurityCollection;
import org.apache.tomcat.util.descriptor.web.SecurityConstraint;
import org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory;
import org.springframework.context.annotation.*;

@Configuration
@Conditional(ConditionalOnHttpsDisabled.class)
public class AngBootServerConfiguration {

   @Bean
   @Profile("prod")
   public TomcatServletWebServerFactory prodTomcatServletWebServerFactory(){
      TomcatServletWebServerFactory tomcat = new TomcatServletWebServerFactory();

      tomcat.setPort(SecurityConstant.DEFAULT_HTTP_PORT);

      return tomcat;
   }

   @Bean
   @Profile("dev")
   public TomcatServletWebServerFactory devTomcatServletWebServerFactory(){
      TomcatServletWebServerFactory tomcat = new TomcatServletWebServerFactory();

      tomcat.setPort(SecurityConstant.DEFAULT_DEVELOP_HTTP_PORT);

      return tomcat;
   }
}
