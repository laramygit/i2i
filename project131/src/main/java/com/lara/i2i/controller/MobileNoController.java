package com.lara.i2i.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


import com.lara.i2i.entity.MobileNo;
import com.lara.i2i.repository.MobileNoRepository;

@RestController
@CrossOrigin(origins= {"http://localhost:4200"})
public class MobileNoController 
{
	@Autowired
	private MobileNoRepository mobNoRepo;
	
	@RequestMapping(path="/saveMobileNo", method = RequestMethod.POST)
	public MobileNo saveMobileNo(@RequestBody MobileNo moNo)
	{
		mobNoRepo.save(moNo);
	   return moNo;
	}
	
	@RequestMapping(path="/readMobileNos", method=RequestMethod.GET)
	public List<MobileNo> readMobileNos()
	{
		return (List<MobileNo>) mobNoRepo.findAll();
	}
	
	@RequestMapping(path="/readMobileNo/{id}", method=RequestMethod.GET)
	public MobileNo readMobileNo(@PathVariable("id") Integer id)
	{
		return mobNoRepo.findById(id).get();
	}
	
	@RequestMapping(path="/deleteMobileNo/{id}", method=RequestMethod.DELETE)
	public Integer deleteMobileNo(@PathVariable("id") Integer id)
	{
		mobNoRepo.deleteById(id);
		return id;
	}	
	
	
	

}
