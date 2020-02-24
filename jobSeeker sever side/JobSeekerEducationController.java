package com.lara.i2i.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.lara.i2i.entity.JobSeekerEducation;

import com.lara.i2i.repository.JobSeekerEducationRepository;

import ch.qos.logback.core.net.SyslogOutputStream;

@RestController
@CrossOrigin(origins = {"http://localhost:4200"})
public class JobSeekerEducationController
{
	@Autowired
	private JobSeekerEducationRepository jobRepo;
	
	@RequestMapping(path="/saveJobSeekerEducation",method=RequestMethod.POST)
	public JobSeekerEducation saveJobSeekerEducation(@RequestBody JobSeekerEducation job) {
	    System.out.println("from savejobseeker");
		jobRepo.save(job);
		return job;
		
	}
	
	
	@RequestMapping(path="/readJobSeekerEducation/{eid}", method=RequestMethod.GET)
	public JobSeekerEducation readJobSeekerEducation(@PathVariable ("eid") Integer id)
	{
		System.out.println("from readJobSeekerEducation ");
		return jobRepo.findById(id).get();
		
	}
	
	@RequestMapping(path="/readJobSeekerEducations", method=RequestMethod.GET)
	public List<JobSeekerEducation> readJobSeekerEducations(){  
		System.out.println("from readJobSeekerEducations");
		return (List<JobSeekerEducation>) jobRepo.findAll();
		
	}
	
	@RequestMapping(path="/deleteJobSeekerEducation/{id}", method=RequestMethod.DELETE)
	public Integer deleteJobSeekerEducation(@PathVariable ("id") Integer id)
	{
		jobRepo.deleteById(id);
		return id;
		
	}


}
