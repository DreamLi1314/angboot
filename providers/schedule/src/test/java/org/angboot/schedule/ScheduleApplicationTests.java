package org.angboot.schedule;

import org.angboot.schedule.job.HelloJob;
import org.junit.jupiter.api.Test;
import org.quartz.*;
import org.quartz.impl.StdSchedulerFactory;

import java.util.HashSet;
import java.util.Set;
import java.util.concurrent.TimeUnit;

import static org.angboot.schedule.job.HelloJob.IDENTITY_GROUP;
import static org.angboot.schedule.job.HelloJob.IDENTITY_NAME;
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
         .withIdentity(IDENTITY_NAME, IDENTITY_GROUP)
         .storeDurably()
         .build();

      Trigger runOnceTrigger = newTrigger()
         .withIdentity(IDENTITY_NAME, IDENTITY_GROUP)
         .forJob(jobDetail.getKey())
         .withSchedule(CronScheduleBuilder.cronSchedule("0 42 19 9 12 ? 2019"))
         .build();

      triggers.add(runOnceTrigger);

      scheduler.scheduleJob(jobDetail, triggers, true);

      scheduler.resumeJob(new JobKey(IDENTITY_NAME, IDENTITY_GROUP));

      TimeUnit.SECONDS.sleep(1);

      new Thread(() -> {
         try {
            // 在当前 task running 的状态, 再次触发一次当前 task.
            JobDataMap data = new JobDataMap();
            data.put("runNow", true);
            scheduler.triggerJob(new JobKey(IDENTITY_NAME, IDENTITY_GROUP), data);
         } catch (SchedulerException e) {
            e.printStackTrace();
         }
      }).start();

      TimeUnit.MINUTES.sleep(3);
      scheduler.shutdown();
   }
}
