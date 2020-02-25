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
	private InstituteTypeRepository instituteRepo;
	
	@RequestMapping(path="/saveInstitute", method=RequestMethod.POST)
	public InstituteType saveInstitute(@RequestBody InstituteType institute) {
		return instituteRepo.save(institute);
	}
	
	@RequestMapping(path="/readInstitutes", method=RequestMethod.GET)
	public List<InstituteType> readInstitutes(){
		return (List<InstituteType>) instituteRepo.findAll();
	}
	
	@RequestMapping(path="/readInstitute/{id}", method=RequestMethod.GET)
	public InstituteType readInstitute(@PathVariable("id") Integer id) {
		InstituteType instType = instituteRepo.findById(id).get();
		return instType;
	}
	
	@RequestMapping(path="/deleteInstitute/{id}", method=RequestMethod.DELETE)
	public Integer deleteInstitute(@PathVariable("id") Integer id) {
		instituteRepo.deleteById(id);
		return id;
	}
	

}
