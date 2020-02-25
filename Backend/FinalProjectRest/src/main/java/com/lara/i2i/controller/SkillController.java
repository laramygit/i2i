package com.lara.i2i.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.lara.i2i.entity.Skill;
import com.lara.i2i.repository.SkillRepository;

@RestController
@CrossOrigin(origins= {"http://localhost:4200"})
public class SkillController {
	
	@Autowired
	private SkillRepository skillRepo;
	
	
	@RequestMapping(path="/saveSkill", method=RequestMethod.POST)
	public Skill saveState(@RequestBody Skill skill)
	{
		skillRepo.save(skill);
		return skill;
	}
	
	@RequestMapping(path="/readSkills", method=RequestMethod.GET)
	public List<Skill> readSkills()
	{
		return (List<Skill>) skillRepo.findAll();
	}
	
	@RequestMapping(path="/readSkill/{id}", method=RequestMethod.GET)
	public Skill readSkill(@PathVariable("id") Integer id)
	{
		return skillRepo.findById(id).get();
	}
	
	@RequestMapping(path="/deleteSkill/{id}", method=RequestMethod.DELETE)
	public Integer deleteSkill(@PathVariable("id") Integer id)
	{
		skillRepo.deleteById(id);
		return id;
	}	

}
