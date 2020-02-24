package com.lara.i2i.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


import com.lara.i2i.entity.RecruiterCorrespondence;
import com.lara.i2i.repository.RecruiterCorrespondenceRepository;


@RestController
@CrossOrigin(origins= {"http://localhost:4200"})
public class RecruiterCorrespondenceController {

	
	@Autowired
	private RecruiterCorrespondenceRepository recruiterCorrespondenceRepo ;
	
	@RequestMapping(path="/saveRecruiterCorrespondence",method = RequestMethod.POST)
	public RecruiterCorrespondence saveRecruiterCorrespondence(@RequestBody RecruiterCorrespondence recruiterCorrespondence) {		
		System.out.println("from saveRecruiterCorrespondence");
		recruiterCorrespondenceRepo.save(recruiterCorrespondence);		
		return recruiterCorrespondence;
	}
	@RequestMapping(path="/readRecruiterCorrespondences",method = RequestMethod.GET)
	public List<RecruiterCorrespondence> readRecruiterCorrespondences() {		
		System.out.println("from readRecruiterCorrespondences");
		return (List<RecruiterCorrespondence>) recruiterCorrespondenceRepo.findAll();		
	}
	
	@RequestMapping(path="/readRecruiterCorrespondence/{rid}",method = RequestMethod.GET)
	public RecruiterCorrespondence readRecruiterCorrespondence(@PathVariable("rid") Integer id) {	
		System.out.println("from readRecruiterCorrespondence");
		return recruiterCorrespondenceRepo.findById(id).get();		
	}	

	
	@RequestMapping(path="/deleteRecruiterCorrespondence/{id}",method = RequestMethod.DELETE)
	public Integer deleteRecruiterCorrespondence(@PathVariable("id") Integer id) {	
		System.out.println("from deleteRecruiter");
		recruiterCorrespondenceRepo.deleteById(id);
		return id;		
	}
	
	
}
