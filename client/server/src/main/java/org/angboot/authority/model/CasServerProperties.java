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

package org.angboot.authority.model;

import io.swagger.annotations.ApiModel;
import lombok.Data;
import org.angboot.util.AngBootEnv;
import org.angboot.util.conditional.ConditionalOnCasEnable;
import org.springframework.context.annotation.Conditional;
import org.springframework.context.annotation.Configuration;

@Data
@Configuration
@Conditional(ConditionalOnCasEnable.class)
@ApiModel("Cas Server Properties")
public class CasServerProperties {

   public CasServerProperties() {
      this.casServerUrlPrefix = AngBootEnv.getProperty("angboot.cas.server.casServerUrlPrefix");
      this.loginUrl = AngBootEnv.getProperty("angboot.cas.server.loginUrl");
      this.logoutUrl = AngBootEnv.getProperty("angboot.cas.server.logoutUrl");
   }

   private String casServerUrlPrefix;
   private String loginUrl;
   private String logoutUrl;
}
