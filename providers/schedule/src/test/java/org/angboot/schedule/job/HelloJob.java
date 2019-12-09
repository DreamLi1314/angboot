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

package org.angboot.schedule.job;

import org.quartz.*;

import java.time.Instant;
import java.util.concurrent.TimeUnit;

public class HelloJob implements Job {

   @Override
   public void execute(JobExecutionContext context) throws JobExecutionException {
      try {
         System.out.println("==================execute============" + Instant.now().toString());
         TimeUnit.SECONDS.sleep(5);

         new Thread(() -> {
            try {
               // 在当前 task running 的状态, 再次触发一次当前 task.
               if(!HelloJob.flag) {
                  HelloJob.flag = true;
                  JobDataMap data = new JobDataMap();
                  data.put("runNow", true);
                  context.getScheduler().triggerJob(new JobKey(IDENTITY_NAME, IDENTITY_GROUP), data);
               }
            } catch (SchedulerException e) {
               e.printStackTrace();
            }
         }).start();

         TimeUnit.SECONDS.sleep(5);
      } catch (Exception e) {
         e.printStackTrace();
      }
   }

   private static volatile boolean flag;

   public static final String IDENTITY_NAME = "test-hello";
   public static final String IDENTITY_GROUP = "test-group-hello";
}
