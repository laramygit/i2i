package com.lara.skill;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = {"http://localhost:4200"})
public class SkillController 
{
	@Autowired
	private SkillRepository skillrepo;
	@RequestMapping(path="/saveSkill", method = RequestMethod.POST)
	public Skill saveSkill(@RequestBody Skill skill)
	{
		System.out.println("saveSkill");
		skillrepo.save(skill);
		return skill;
		
	}
	@RequestMapping(path = "/readSkills", method = RequestMethod.GET)
	public List<Skill> readSkills()
	{
		System.out.println("readSkills");
		return (List<Skill>)skillrepo.findAll();
		
	}
	@RequestMapping(path = "/readSkill/{id}", method = RequestMethod.GET)
	public Skill readSkill(@PathVariable("id") Integer id)
	{
		return skillrepo.findById(id).get();
	}
	@RequestMapping(path = "/deleteSkill/{id}", method = RequestMethod.DELETE)
	public Integer deleteSkill(@PathVariable("id") Integer id)
	{
		 skillrepo.deleteById(id);
		 return id;
		
	}

}
