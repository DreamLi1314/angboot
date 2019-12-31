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

package org.angboot.schedule.service;

import org.quartz.Scheduler;
import org.quartz.SchedulerException;
import org.quartz.impl.StdSchedulerFactory;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;

@Service
@org.apache.dubbo.config.annotation.Service
public class ScheduleServiceImpl implements ScheduleService {

   @PostConstruct
   private void init() throws SchedulerException {
      scheduler = StdSchedulerFactory.getDefaultScheduler();
   }

   @Override
   public void startServer() throws Exception {
      scheduler.start();
   }

   @Override
   public void stopServer() throws Exception {
      scheduler.shutdown(true);
   }

   private Scheduler scheduler;
}
