package com.lara.i2i.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.lara.i2i.entity.JobSeeker;
import com.lara.i2i.repository.JobSeekerRepository;

@RestController
@CrossOrigin(origins = {"http://localhost:4200"})
public class JobSeekerController {
	@Autowired
  private JobSeekerRepository jobSeekerRepository;
	
	@RequestMapping(path = "/saveJobSeeker",method = RequestMethod.POST)
	public JobSeeker saveJobSeeker(@RequestBody JobSeeker jobSeeker) 
	{
		jobSeekerRepository.save(jobSeeker);
		return jobSeeker;
	}
	
	@RequestMapping(path = "/readJobSeekers",method = RequestMethod.GET)
	public List<JobSeeker> readJobSeekers()
	{
		System.out.println("readJobSeekers:");
		return(List<JobSeeker>) jobSeekerRepository.findAll();
	}
	
	@RequestMapping(path = "/deleteJobSeeker/{id}",method = RequestMethod.DELETE)
	public Integer deleteJobSeeker(@PathVariable("id") Integer id) 
	{
		System.out.println("deleteJobSeeker");
		jobSeekerRepository.deleteById(id);	
		return id;
	}
	
	@RequestMapping(path = "/readJobSeeker/{id}",method = RequestMethod.GET)
	public JobSeeker readJobSeeker(@PathVariable("id") Integer id) 
	{
		System.out.println("readJobSeeker");
		JobSeeker jobSeeker = jobSeekerRepository.findById(id).get();
		return jobSeeker;
	}
	
	
}
