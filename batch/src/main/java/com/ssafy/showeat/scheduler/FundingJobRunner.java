package com.ssafy.showeat.scheduler;

import java.util.HashMap;

import org.quartz.JobDataMap;
import org.quartz.JobDetail;
import org.quartz.Scheduler;
import org.quartz.SchedulerException;
import org.quartz.Trigger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.stereotype.Component;

import com.ssafy.showeat.job.FinishFundingConfig;

@Component
public class FundingJobRunner extends JobRunner {

	@Autowired
	private Scheduler scheduler;

	@Override
	protected void doRun(ApplicationArguments args) {

		// JobDetail jobDetail = buildJobDetail(FundingSchJob.class, "fundingSchJob", "batch", new HashMap());
		// Trigger trigger = buildJobTrigger("0/30 * * * * ?");
		//
		// try {
		// 	scheduler.scheduleJob(jobDetail, trigger);
		// } catch (SchedulerException e) {
		// 	e.printStackTrace();
		// }
	}
}
