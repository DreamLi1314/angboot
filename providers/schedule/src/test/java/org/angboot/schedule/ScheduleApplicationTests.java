package org.angboot.schedule;

import org.angboot.schedule.job.HelloJob;
import org.junit.jupiter.api.Test;
import org.quartz.*;
import org.quartz.impl.StdSchedulerFactory;

import java.util.HashSet;
import java.util.Set;
import java.util.concurrent.TimeUnit;

import static org.quartz.TriggerBuilder.newTrigger;

class ScheduleApplicationTests {

   /**
    * 测试 Quartz issue: 在一个 run once 的 task 在 running 的状态, 再次手动触发执行 task
    * issue: Test task 是否执行了三遍.
    * result: 两遍
    */
   @Test
   void testSchedulerIssue() throws Exception {
      Scheduler scheduler = StdSchedulerFactory.getDefaultScheduler();
      scheduler.start();

      Set<Trigger> triggers = new HashSet<>();

      JobDetail jobDetail = JobBuilder.newJob(HelloJob.class)
         .withIdentity(HelloJob.IDENTITY_NAME, HelloJob.IDENTITY_GROUP)
         .storeDurably()
         .build();

      Trigger runOnceTrigger = newTrigger()
         .withIdentity(HelloJob.IDENTITY_NAME, HelloJob.IDENTITY_GROUP)
         .forJob(jobDetail.getKey())
         .withSchedule(CronScheduleBuilder.cronSchedule("0 54 15 9 12 ? 2019"))
         .build();

      triggers.add(runOnceTrigger);

      scheduler.scheduleJob(jobDetail, triggers, true);

      scheduler.resumeJob(new JobKey(HelloJob.IDENTITY_NAME, HelloJob.IDENTITY_GROUP));

      TimeUnit.MINUTES.sleep(3);
      scheduler.shutdown();
   }
}
