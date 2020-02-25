package com.lara.i2i.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.lara.i2i.entity.JobType;
import com.lara.i2i.repository.JobTypeRepository;

@RestController
@CrossOrigin(origins = {"http://localhost:4200"})
public class JobTypeController {
	
	@Autowired
	private JobTypeRepository jobTypeRepository;
	
	@RequestMapping(path = "/saveJobType",method = RequestMethod.POST)
	public JobType saveJobType(@RequestBody JobType jobType) {
		jobTypeRepository.save(jobType);
		return jobType;
		
	}
	@RequestMapping(path = "/readJobTypes",method = RequestMethod.GET)
	public List<JobType>  readJobTypes(){
		return (List<JobType>) jobTypeRepository.findAll();
		
	}
	
	@RequestMapping(path = "/delteJobType/{jid}",method = RequestMethod.DELETE)
	public Integer delteJobType(@PathVariable("jid") Integer id) {
		jobTypeRepository.deleteById(id);
		return id;
	}
	@RequestMapping(path = "/readJobType/{jid}",method = RequestMethod.GET)
	public JobType readJobType(@PathVariable("jid") Integer id) {
		return jobTypeRepository.findById(id).get();
		
		
	}

}
