package com.lara.i2i.controller;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.lara.i2i.entity.EducationBoard;
import com.lara.i2i.entity.InstituteType;
import com.lara.i2i.entity.Recruiter;
import com.lara.i2i.repository.EducationBoardRepository;
import com.lara.i2i.repository.InstituteTypeRepository;
import com.lara.i2i.repository.RecruiterRepository;

@RestController
@CrossOrigin(origins = {"http://localhost:4200"})
public class MyController {
	@Autowired
	private RecruiterRepository recruiterRepository;
	
	@Autowired
	private EducationBoardRepository educationBoardRepository;
	
	@Autowired
	private InstituteTypeRepository instituteTypeRepo;
	
	
	@RequestMapping(path="/saveRecruiter", method = RequestMethod.POST)
	public Recruiter saveRecruiter(@RequestBody Recruiter recruiter)
	{
		System.out.println("saveRecruiter");
		recruiterRepository.save(recruiter);
		return recruiter;
	}
	
	@RequestMapping(path="/readAll", method = RequestMethod.GET)
	public List<Recruiter> readAll()
	{
		System.out.println("readAll");
		return (List<Recruiter>) recruiterRepository.findAll();
	}
	
	
	@RequestMapping(path="/delete/{id}", method = RequestMethod.DELETE)
	public Integer deleteRecruiter(@PathVariable("id") Integer id )
	{
		System.out.println("deleteRecruiter");
		recruiterRepository.deleteById(id);
		return(id);
		
	}
	
	@RequestMapping(path="/read/{id}", method = RequestMethod.GET)
	public Recruiter read(@PathVariable("id") Integer id )
	{
		System.out.println("read");
		Recruiter recruiter = recruiterRepository.findById(id).get();
		return recruiter;
		
	}		
	
	@RequestMapping(path="/readEducationBoards", method=RequestMethod.GET)
	public List<EducationBoard> readEducationBoards()
	{
		System.out.println("readEducationBoard");
		return (List<EducationBoard>) educationBoardRepository.findAll();
	}
	
	@RequestMapping(path="/readInstituteTypes", method=RequestMethod.GET)
	public List<InstituteType> readInstituteTypes()
	{
		System.out.println("readInstituteTypes");
		return (List<InstituteType>) instituteTypeRepo.findAll();
	}
}


