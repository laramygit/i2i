package com.lara.i2i.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


import com.lara.i2i.entity.RecruiterContact;
import com.lara.i2i.repository.RecruiterContactRepository;

@RestController
@CrossOrigin(origins= {"http://localhost:4200"})
public class RecruiterContactController {

	@Autowired
	private RecruiterContactRepository RecruiterContactRepo;
	
	@RequestMapping(path="/saveRecruiterContact",method=RequestMethod.POST)
	public RecruiterContact saveRecruiterContact(@RequestBody RecruiterContact recruiterContact) {
		System.out.println("from saveRecruiterContact");
		RecruiterContactRepo.save(recruiterContact);
		return recruiterContact;
	}
	
	@RequestMapping(path="/readRecruiterContacts",method=RequestMethod.GET)
	public List<RecruiterContact> readRecruiterContacts() {
		System.out.println("from readRecruiterContacts");
		return (List<RecruiterContact>) RecruiterContactRepo.findAll();		
	}
	
	@RequestMapping(path="/readRecruiterContact/{rid}",method = RequestMethod.GET)
	public RecruiterContact readRecruiterContact(@PathVariable("rid") Integer id) {	
		System.out.println("from readRecruiterContact");
		return RecruiterContactRepo.findById(id).get();		
	}
	
	@RequestMapping(path="/deleteRecruiterContact/{cid}",method=RequestMethod.DELETE)
	public Integer deleteRecruiterContact(@PathVariable("cid") Integer id) {
		System.out.println("from deleteRecruiterContact");
		RecruiterContactRepo.deleteById(id);
		return id;
	}
	
}
