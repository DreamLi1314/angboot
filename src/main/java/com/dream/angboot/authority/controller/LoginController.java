package com.dream.angboot.authority.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class LoginController {

   @PostMapping("/login")
   public String login() {
      return "redirect:/app/em";
   }

   @GetMapping("/userlogin")
   public String gotoLoginPage() {
      return "login";
   }


}
