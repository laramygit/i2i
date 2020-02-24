package com.lara.i2i.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


import com.lara.i2i.entity.Recruiter;
import com.lara.i2i.repository.RecruiterRepository;


@RestController
@CrossOrigin(origins= {"http://localhost:4200"})
public class RecruiterController {

	@Autowired
	private RecruiterRepository recruiterRepo;
	
	@RequestMapping(path="/saveRecruiter",method = RequestMethod.POST)
	public Recruiter saveRecruiter(@RequestBody Recruiter recruiter) {		
		System.out.println("from saveRecruiter");
		recruiterRepo.save(recruiter);		
		return recruiter;
	}
	@RequestMapping(path="/readRecruiters",method = RequestMethod.GET)
	public List<Recruiter> readRecruiters() {		
		System.out.println("from readRecruiters");
		return (List<Recruiter>) recruiterRepo.findAll();
		
	}
	
	@RequestMapping(path="/readRecruiter/{rid}",method = RequestMethod.GET)
	public Recruiter readRecruiter(@PathVariable("rid") Integer id) {	
		System.out.println("from readRecruiter");
		return recruiterRepo.findById(id).get();
		
	}

	@RequestMapping(path="/deleteRecruiter/{id}",method = RequestMethod.DELETE)
	public Integer deleteRecruiter(@PathVariable("id") Integer id) {	
		System.out.println("from deleteRecruiter");
		recruiterRepo.deleteById(id);
		return id;		
	}
	
	
}
