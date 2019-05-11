package com.dream.angboot.config;

import org.springframework.boot.web.server.ErrorPage;
import org.springframework.boot.web.server.ErrorPageRegistrar;
import org.springframework.boot.web.server.ErrorPageRegistry;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;

@Configuration
public class AngBootErrorConfiguration implements ErrorPageRegistrar {

   @Override
   public void registerErrorPages(ErrorPageRegistry registry) {
      ErrorPage[] errorPages = new ErrorPage[1];
      // Angular need server redirect 404 to index of angular.
      errorPages[0] = new ErrorPage(HttpStatus.NOT_FOUND, "/app/index.html");

      registry.addErrorPages(errorPages);
   }
}
