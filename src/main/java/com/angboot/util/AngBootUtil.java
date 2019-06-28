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

package com.angboot.util;

import org.springframework.util.StringUtils;

import java.util.Arrays;

/**
 * Angboot util.
 */
public final class AngBootUtil {

   public static String getAngBootHome(String[] args) {
      String home = null;

      if(args != null && args.length > 0) {
         home = Arrays.asList(args)
            .stream()
            .filter(arg -> !StringUtils.isEmpty(arg) && arg.contains(AngBootUtil.ANGBOOT_HOME_KEY))
            .map(arg -> arg.split("="))
            .filter(kv -> kv != null && kv.length == 2)
            .map(kv -> kv[1])
            .findFirst()
            .orElse(null);
      }

      if(home == null) {
         home = System.getProperty(AngBootUtil.ANGBOOT_HOME_KEY);
      }

      return home;
   }

   public static final String ANGBOOT_HOME_KEY = "angboot.home";
}
