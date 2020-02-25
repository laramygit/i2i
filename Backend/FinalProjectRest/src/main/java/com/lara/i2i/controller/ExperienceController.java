package com.lara.i2i.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.lara.i2i.entity.Experience;
import com.lara.i2i.repository.ExperienceRepository;

@RestController
@CrossOrigin(origins= {"http://localhost:4200"})
public class ExperienceController {
	
	@Autowired
	private ExperienceRepository experienceRepo;
	
	
	@RequestMapping(path="/saveExperience", method=RequestMethod.POST)
	public Experience saveExperience(@RequestBody Experience experience) {
		return experienceRepo.save(experience);
	}
	
	@RequestMapping(path="/readExperiences", method=RequestMethod.GET)
	public List<Experience> readExperiences(){
		return (List<Experience>) experienceRepo.findAll();
	}
	
	@RequestMapping(path="/readExperience/{id}", method=RequestMethod.GET)
	public Experience readExperience(@PathVariable("id") Integer id) {
		Experience experience = experienceRepo.findById(id).get();
		return experience;
	}
	
	@RequestMapping(path="/deleteExperience/{id}", method=RequestMethod.DELETE)
	public Integer deleteExperience(@PathVariable("id") Integer id) {
		experienceRepo.deleteById(id);
		return id;
	}

}
