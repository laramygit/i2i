package com.lara.m1m.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.lara.m1m.entity.Email;
import com.lara.m1m.repository.Emailrepository;

@RestController
@CrossOrigin(origins = {"http://localhost:4200"})
public class EmailController {
	
	@Autowired
	private Emailrepository emailrepo;
	
	
	@RequestMapping(path="/saveEmail", method=RequestMethod.POST)
	public Email email(@RequestBody Email email)
	{
		emailrepo.save(email);
		return email;
	}
	@RequestMapping(path= "/readEmails", method=RequestMethod.GET)
	public List<Email> readEmails()
	{
		
		System.out.println("readAllEmails");
		return (List<Email>) emailrepo.findAll();
	}
	
	@RequestMapping(path="/deleteEmail/{id}", method=RequestMethod.DELETE)
	public Integer deleteEmail(@PathVariable ("id") Integer id)
	{
		System.out.println("deleteEmail");
		emailrepo.deleteById(id);
		return id;
	}
	
	
	@RequestMapping(path="/readEmail/{id}", method=RequestMethod.GET)
	public Email readEmail(@PathVariable ("id") Integer id)
	{
		System.out.println("readEmail");
		Email email = emailrepo.findById(id).get();
		return email;
	}
	
	
	
	

	
}
