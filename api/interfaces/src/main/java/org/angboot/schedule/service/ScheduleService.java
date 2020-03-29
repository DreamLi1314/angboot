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

import org.quartz.*;

/**
 * Schedule Service Interface, implement should provided by rpc provider
 */
public interface ScheduleService {

   /**
    * Start Schedule Server
    */
   void startServer() throws SchedulerException;

   /**
    * Stop Schedule Server, default waiting added jobs complete.
    */
   void stopServer() throws SchedulerException;

   /**
    * Stop Schedule Server
    * @param waitForJobsToComplete waiting added jobs complete
    */
   void shutdown(boolean waitForJobsToComplete) throws SchedulerException;

   void addJob(JobDetail job) throws SchedulerException;

   void addJob(JobDetail job, boolean replace) throws SchedulerException;

   void executeJob(JobKey jobKey) throws SchedulerException;

   void executeJob(JobKey jobKey, JobDataMap data) throws SchedulerException;

   void scheduleJob(Trigger trigger) throws SchedulerException;

   void scheduleJob(JobDetail jobDetail, Trigger trigger) throws SchedulerException;

}
