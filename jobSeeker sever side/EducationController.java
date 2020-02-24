package com.lara.i2i.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.lara.i2i.entity.Education;
import com.lara.i2i.repository.EducationRepository;

@RestController
@CrossOrigin(origins= {"http://localhost:4200"})
public class EducationController 
{
	@Autowired
	private EducationRepository educationRepo;
	
	@RequestMapping(path="/saveEducation", method=RequestMethod.POST)
	public Education saveEducation(@RequestBody Education education)
	{
		educationRepo.save(education);
		return education;
		
	}
	
	@RequestMapping(path="/readEducation/{id}", method=RequestMethod.GET)
	public Education readEducation(@PathVariable ("id") Integer id)
	{
		return educationRepo.findById(id).get();
		
	}
	
	@RequestMapping(path="/readEducations", method=RequestMethod.GET)
	public List<Education> readEducations()
	{
		return (List<Education>)educationRepo.findAll();
		
	}
	
	@RequestMapping(path="/deleteEducation/{id}", method=RequestMethod.DELETE)
	public Integer deleteEducation(@PathVariable ("id") Integer id)
	{
		educationRepo.deleteById(id);
		return id;
		
	}

	
	
	
	
	
	
	
	
	
	
	
	
	

}
