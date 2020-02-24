package com.lara.i2i.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.lara.i2i.entity.State;
import com.lara.i2i.repository.StateRepository;

@RestController
@CrossOrigin(origins= {"http://localhost:4200"})
public class StateController {
	@Autowired
	private StateRepository stateRepository;
	
	@RequestMapping(path="/saveState", method=RequestMethod.POST)
	public State saveState(@RequestBody State state)
	{
		stateRepository.save(state);
		return state;
	}
	
	@RequestMapping(path="/readStates", method=RequestMethod.GET)
	public List<State> readStates()
	{
		return (List<State>) stateRepository.findAll();
	}
	
	@RequestMapping(path="/readState/{id}", method=RequestMethod.GET)
	public State readState(@PathVariable("id") Integer id)
	{
		return stateRepository.findById(id).get();
	}
	
	@RequestMapping(path="/deleteState/{id}", method=RequestMethod.DELETE)
	public Integer deleteState(@PathVariable("id") Integer id)
	{
		stateRepository.deleteById(id);
		return id;
	}	
}
