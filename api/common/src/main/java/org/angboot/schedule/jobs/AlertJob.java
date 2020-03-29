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
package org.angboot.schedule.jobs;

import org.angboot.domain.User;
import org.quartz.Job;
import org.quartz.JobDataMap;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;

public class AlertJob implements Job {
   @Override
   public void execute(JobExecutionContext context) throws JobExecutionException {
      JobDataMap jobDataMap = context.getJobDetail().getJobDataMap();

      String msg = jobDataMap.getString("msg");
      User user = (User) jobDataMap.get("user");

      assert user != null;

      System.out.println("User is " + user.toString() + ", say " + msg);
   }
}
