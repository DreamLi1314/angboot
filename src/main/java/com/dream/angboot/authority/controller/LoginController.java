package com.dream.angboot.authority.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class LoginController {

   @PostMapping("/login")
   public void login() {
//      return "redirect:/app/em";
   }



}
