package com.lara.i2i.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.lara.i2i.entity.InstituteType;

import com.lara.i2i.repository.InstituteTypeRepository;



@RestController
@CrossOrigin(origins= {"http://localhost:4200"})
public class InstituteTypeController {
	
	@Autowired
	private InstituteTypeRepository instituteTypeRepo;
	
	@RequestMapping(path="/saveInstituteType",method=RequestMethod.POST)
	public InstituteType saveInstituteType(@RequestBody InstituteType instituteType)
	{
		instituteTypeRepo.save(instituteType);
		return instituteType;
	}
	@RequestMapping(path="/readInstituteTypes",method=RequestMethod.GET)
	public List<InstituteType> readInstituteTypes()
	{
		return (List<InstituteType>) instituteTypeRepo.findAll();
	}
	@RequestMapping(path="/deleteInstituteType/{id}",method=RequestMethod.DELETE)
	public Integer deleteInstituteType(@PathVariable("id") Integer id)
	{
		instituteTypeRepo.deleteById(id);
		return id;
	}
	@RequestMapping(path="/readInstituteType/{id}",method=RequestMethod.GET)
	public InstituteType readInstituteType(@PathVariable("id") Integer id)
	{
		return  instituteTypeRepo.findById(id).get();
	}
	

	

}
	
