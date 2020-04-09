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
import org.angboot.util.conditional.ConditionalOnHttpsEnabled;
import org.apache.catalina.Context;
import org.apache.catalina.connector.Connector;
import org.apache.tomcat.util.descriptor.web.SecurityCollection;
import org.apache.tomcat.util.descriptor.web.SecurityConstraint;
import org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory;
import org.springframework.boot.web.server.Ssl;
import org.springframework.context.annotation.*;

@Configuration
@Conditional(ConditionalOnHttpsEnabled.class)
public class AngBootHttpsConfiguration {

   /**
    * Redirect http connection to https connection
    */
   @Bean
   public TomcatServletWebServerFactory tomcatServletWebServerFactory(){
      TomcatServletWebServerFactory tomcat = new TomcatServletWebServerFactory() {
         @Override
         protected void postProcessContext(Context context) {
            SecurityConstraint securityConstraint = new SecurityConstraint();
            securityConstraint.setUserConstraint("CONFIDENTIAL");
            SecurityCollection collection = new SecurityCollection();
            collection.addPattern("/*");
            securityConstraint.addCollection(collection);
            context.addConstraint(securityConstraint);
         }
      };
      tomcat.addAdditionalTomcatConnectors(connector());

      // setting server.port
      tomcat.setPort(AngBootEnv.getIntegerProperty(SecurityConstant.HTTPS_PORT_KEY,
         SecurityConstant.DEFAULT_HTTPS_PORT));

      // setting ssl
      tomcat.setSsl(getSsl());

      return tomcat;
   }

   @Bean
   public Connector connector(){
      Connector connector = new Connector();
      connector.setScheme("http"); // default
      connector.setPort(SecurityConstant.DEFAULT_HTTP_PORT);
      connector.setSecure(false);
      connector.setRedirectPort(AngBootEnv.getIntegerProperty(SecurityConstant.HTTPS_PORT_KEY,
         SecurityConstant.DEFAULT_HTTPS_PORT));

      return connector;
   }

   @Bean
   public Ssl getSsl() {
      Ssl ssl = new Ssl();
      ssl.setEnabled(true);
      ssl.setKeyStore(getBasedSslFolder() + AngBootEnv.getProperty(SecurityConstant.HTTPS_KEY_STORE_PATH_KEY));
      ssl.setKeyAlias(AngBootEnv.getProperty(SecurityConstant.HTTPS_KEY_ALIAS_KEY));
      ssl.setKeyStorePassword(AngBootEnv.getProperty(SecurityConstant.HTTPS_KEY_STORE_PASSWORD_KEY));
      ssl.setKeyStoreType(AngBootEnv.getProperty(SecurityConstant.HTTPS_KEY_STORE_TYPE_KEY));

      return ssl;
   }

   /**
    * Get ssl config base folder.
    */
   private String getBasedSslFolder() {
      return AngBootEnv.getHome() + ANGBOOT_SSL_BASED_PATH;
   }

   public static final String ANGBOOT_SSL_BASED_PATH = "/ssl/";
}
