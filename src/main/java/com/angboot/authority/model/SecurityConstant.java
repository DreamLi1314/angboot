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

package com.angboot.authority.model;

public class SecurityConstant {
   /*
    * admin role.
    */
   public static final String ROLE_ADMIN = "ADMIN";

   /*
    * role prefix.
    */
   public static final String ROLE_PREFIX = "";

   /*
    * customer go to login page url.
    */
   public static final String LOGIN_PAGE_URL = "/userlogin";

   /*
    * Authentication provider key.
    */
   public static final String AUTHENTICATION_PROVIDER_KEY = "angboot_cas_provider";

   /*
    * the key of cas enabled property.
    */
   public static final String CAS_ENABLED_KEY = "angboot.cas.enabled";
}
