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
@CrossOrigin(origins= {"http://localhost:4200"})
public class MediumController
{
	@Autowired
	private MediumRepository mediumRepo;
	
	@RequestMapping(path="/saveMedium", method=RequestMethod.POST)
	public Medium saveMedium(@RequestBody Medium medium)
	{
		mediumRepo.save(medium);
		return medium;
		
	}
	
	@RequestMapping(path="/readMedium/{id}", method=RequestMethod.GET)
	public Medium readMedium(@PathVariable ("id") Integer id)
	{
		return mediumRepo.findById(id).get();
		
	}
	
	@RequestMapping(path="/readMediums", method=RequestMethod.GET)
	public List<Medium> readMediums()
	{
		return (List<Medium>) mediumRepo.findAll();
		
	}
	
	@RequestMapping(path="/deleteMedium/{id}", method=RequestMethod.DELETE)
	public Integer deleteMedium(@PathVariable ("id") Integer id)
	{
		mediumRepo.deleteById(id);
		return id;
		
	}


}
