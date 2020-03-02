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
import org.angboot.util.AngBootEnv;
import org.angboot.util.conditional.ConditionalOnCasEnable;
import lombok.Data;
import org.springframework.context.annotation.Conditional;
import org.springframework.context.annotation.Configuration;

@Data
@Configuration
@Conditional(ConditionalOnCasEnable.class)
@ApiModel("Cas Client Properties")
public class CasClientProperties {

   public CasClientProperties() {
      this.casClientUrlPrefix = AngBootEnv.getProperty("angboot.cas.client.casClientUrlPrefix");
      this.service = AngBootEnv.getProperty("angboot.cas.client.service");
      this.sendRenew = AngBootEnv.getBoolean("angboot.cas.client.sendRenew");
      this.filterProcessesUrl = AngBootEnv.getProperty("angboot.cas.client.filterProcessesUrl");
      this.logoutUrl = AngBootEnv.getProperty("angboot.cas.client.logoutUrl");
   }

   private String casClientUrlPrefix;
   private String service;
   private boolean sendRenew;
   private String filterProcessesUrl;
   private String logoutUrl;
}
