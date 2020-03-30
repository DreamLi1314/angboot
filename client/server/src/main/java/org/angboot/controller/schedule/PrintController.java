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

package org.angboot.controller.schedule;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.angboot.domain.User;
import org.angboot.schedule.jobs.PrintDateTimeJob;
import org.angboot.schedule.service.ScheduleService;
import org.quartz.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;

@Api("Schedule Print Controller")
@RestController
public class PrintController {

   @Autowired
   public PrintController(ScheduleService scheduleService) {
      this.scheduleService = scheduleService;
   }

   @GetMapping("/api/schedule/print-date-time")
   @ApiOperation("Print Date Time")
   @ApiParam(name = "jobName", type = "String", readOnly = true)
   public void printDateTime(@RequestParam() final String jobName) throws Exception {
      JobDetail jobDetail = PrintDateTimeJob.buildJob(jobName);
      JobDataMap jobDataMap = new JobDataMap();
      jobDataMap.put("dKey", LocalDateTime.now().toString());
      jobDataMap.put("objectKey", new User());

      SimpleTrigger printDateTimeTriggerKey = TriggerBuilder.newTrigger()
         .forJob(jobDetail)
         .usingJobData(jobDataMap)
         .withIdentity(jobName, PrintDateTimeJob.JOB_GROUP)
         .withSchedule(SimpleScheduleBuilder.repeatSecondlyForTotalCount(5))
         .build();

      scheduleService.scheduleJob(jobDetail, printDateTimeTriggerKey);
   }

   private final ScheduleService scheduleService;
}
