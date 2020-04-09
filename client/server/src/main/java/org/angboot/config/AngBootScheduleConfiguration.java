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

import org.angboot.schedule.service.ScheduleService;
import org.angboot.util.conditional.ConditionalOnScheduleStarted;
import org.apache.dubbo.config.ReferenceConfig;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Conditional;
import org.springframework.context.annotation.Configuration;

@Configuration
@Conditional(ConditionalOnScheduleStarted.class)
public class AngBootScheduleConfiguration extends AngBootDubboConfiguration {

   @Bean()
   public ScheduleService scheduleService() {
      ReferenceConfig<ScheduleService> reference = new ReferenceConfig<>();
      reference.setApplication(applicationConfig());
      reference.setRegistry(registryConfig());
      reference.setInterface(ScheduleService.class);
      // TODO reference version
//      reference.setVersion("1.0.0");

      return reference.get();
   }
}
