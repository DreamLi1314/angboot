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

package org.angboot.constants.security;

public class SecurityConstant {
   /**
    * admin role.
    */
   public static final String ROLE_ADMIN = "ADMIN";

   /**
    * role prefix.
    */
   public static final String ROLE_PREFIX = "";

   /**
    * customer go to login page url.
    */
   public static final String LOGIN_PAGE_URL = "/userlogin";

   /**
    * Authentication provider key.
    */
   public static final String AUTHENTICATION_PROVIDER_KEY = "angboot_cas_provider";

   /**
    * the key of cas enabled property.
    */
   public static final String CAS_ENABLED_KEY = "angboot.cas.enabled";

   /**
    * the key of outer authority enabled property.
    */
   public static final String OUTER_AUTHORITY_ENABLED_KEY = "angboot.outer.authority.enabled";

   /**
    * the key of outer authority application name.
    */
   public static final String OUTER_AUTHORITY_APP_NAME_KEY = "outer.authority.app.name";

   /**
    * the key of outer authority application registry address.
    */
   public static final String OUTER_AUTHORITY_APP_REGISTRY_ADDRESS_KEY = "outer.authority.app.registry.address";

   /**
    * the key of outer authority application registry username.
    */
   public static final String OUTER_AUTHORITY_APP_REGISTRY_USERNAME_KEY = "outer.authority.app.registry.username";

   /**
    * the key of outer authority application registry password.
    */
   public static final String OUTER_AUTHORITY_APP_REGISTRY_PASSWORD_KEY = "outer.authority.app.registry.password";

   /**
    * the key of https enabled.
    */
   public static final String HTTPS_ENABLED_KEY = "angboot.https.enabled";

   /**
    * the key of https connection port.
    */
   public static final String HTTPS_PORT_KEY = "angboot.https.port";

   /**
    * Defaulting https connection port.
    */
   public static final int DEFAULT_HTTPS_PORT = 8443;

   /**
    * Defaulting prod mode http connection port.
    */
   public static final int DEFAULT_HTTP_PORT = 80;

   /**
    * Defaulting dev mode http connection port.
    */
   public static final int DEFAULT_DEVELOP_HTTP_PORT = 8080;

   /**
    * the key of https sll key store. Based on `config/ssl/`
    */
   public static final String HTTPS_KEY_STORE_PATH_KEY = "angboot.https.ssl.key.store.path";

   /**
    * the key of https sll key alias.
    */
   public static final String HTTPS_KEY_ALIAS_KEY = "angboot.https.ssl.key.alias";

   /**
    * the key of password of https sll key store.
    */
   public static final String HTTPS_KEY_STORE_PASSWORD_KEY = "angboot.https.ssl.key.store.pwd";

   /**
    * the key of type of https sll key store.
    */
   public static final String HTTPS_KEY_STORE_TYPE_KEY = "angboot.https.ssl.key.store.type";
}
