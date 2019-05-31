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

package com.dream.angboot.web.portal.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
public class WelcomePageController {

   @GetMapping("/api/portal/test/get")
   public String get(HttpServletRequest request){

      System.out.println("=========get==========" + request);

      return request.getContentType() + "test success";
   }

   @PostMapping("/api/portal/test/post")
   public String post(HttpServletRequest request) {

      System.out.println("=========post==========" + request);

      String name = request.getParameter("name");

      System.out.println("=========name=====" + name
         + "====f1===" + request.getParameter("f1")
         + "====f2===" + request.getParameter("f2")
      );

      return "Hello, " + name;
   }

   @PostMapping("/api/portal/test/postForm")
   public String postFormValue(HttpServletRequest request) {

      System.out.println("=========postFormValue==========" + request);

      String name = request.getParameter("name");

      System.out.println("=========name=====" + name
         + "====f1===" + request.getParameter("f1")
         + "====f2===" + request.getParameter("f2")
      );

      return "Hello222222, " + name;
   }

}
