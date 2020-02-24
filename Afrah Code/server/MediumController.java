package com.lara.i2i.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.lara.i2i.entity.Medium;
import com.lara.i2i.repository.MediumRepository;

@RestController
@CrossOrigin(origins = {"http://localhost:4200"})
public class MediumController {
	
	@Autowired
	private MediumRepository mediumRepo;
	
	@RequestMapping(path = "/saveMedium", method=RequestMethod.POST)
	public Medium saveMedium(@RequestBody Medium medium)
	{
		System.out.println("from save medium method");
		mediumRepo.save(medium);
		return medium;
	}
	
	@RequestMapping(path = "/readMediums", method=RequestMethod.GET)
	public List<Medium> readMediums()
	{
		System.out.println("From read all mediums method");
		return (List<Medium>) mediumRepo.findAll();
	}
	
	@RequestMapping(path = "/readMedium/{id}", method=RequestMethod.GET)
	public Medium readMedium(@PathVariable("id") Integer id)
	{
		System.out.println("from read one medium method");
		return mediumRepo.findById(id).get();
	}
	
	@RequestMapping(path = "/deleteMedium/{id}", method=RequestMethod.DELETE)
	public Integer deleteMedium(@PathVariable("id") Integer id)
	{
		System.out.println("from delete medium method");
		mediumRepo.deleteById(id);
		return id;
	}	
}
