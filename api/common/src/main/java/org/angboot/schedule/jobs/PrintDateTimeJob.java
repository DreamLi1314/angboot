package org.angboot.schedule.jobs;

import org.quartz.*;

import java.time.LocalDateTime;

@PersistJobDataAfterExecution // 标记当前 Job 为一个有状态的 Job
public class PrintDateTimeJob implements Job {

   public PrintDateTimeJob() {
      System.out.println("======PrintDateTimeJob=======");
   }

   public void execute(JobExecutionContext jobExecutionContext) throws JobExecutionException {
      String dateTime = LocalDateTime.now().toString();
      JobDataMap jobDataMap = jobExecutionContext.getJobDetail().getJobDataMap();
      String baseValue = jobDataMap.getString("dKey");
      Object object = jobDataMap.get("objectKey");

      System.out.println("$$The current dateTime is " + dateTime
         + "======baseValue=======" + baseValue + "==object==" + object);

      try {
         Thread.sleep(2000);
      } catch (InterruptedException e) {
         e.printStackTrace();
      }

      System.out.println("$$PrintDateTimeJob execute success.");
   }

   public static JobDetail buildJob(String key) {
      JobDataMap jobDataMap = new JobDataMap();
      jobDataMap.put("objectKey", new Object());

      return JobBuilder.newJob(PrintDateTimeJob.class)
         .withIdentity(key, JOB_GROUP)
         // 传递基本数据类型
         .usingJobData("dKey", "dValue")
         // 传递引用数据类型
         .usingJobData(jobDataMap)
         .storeDurably() // 如果添加 Job 时没有指定 trigger 需要指定 durably
         .build();
   }

   public static final String JOB_GROUP = "angboot.print";
}
