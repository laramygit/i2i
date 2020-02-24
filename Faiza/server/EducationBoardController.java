package com.lara.i2i.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.lara.i2i.entity.EducationBoard;
import com.lara.i2i.repository.EducationBoardRepository;

@RestController
@CrossOrigin(origins = {"http://localhost:4200"})
public class EducationBoardController {
	
	@Autowired
	private EducationBoardRepository edRepo;
	
	@RequestMapping(path="/saveEducationBoard", method = RequestMethod.POST)
	public EducationBoard saveEducationBoard(@RequestBody EducationBoard eduBoard)
	{
		edRepo.save(eduBoard);
		return eduBoard;
	}
	@RequestMapping(path="/readEducationBoards", method = RequestMethod.GET)
	public List<EducationBoard> readEducationBoards()
	{
		return (List<EducationBoard>) edRepo.findAll();
	}
	@RequestMapping(path="/deleteEducationBoard/{id}", method = RequestMethod.DELETE)
	public Integer deleteEducationBoard(@PathVariable("id") Integer id)
	{
		edRepo.deleteById(id);
		return id;
	}

	@RequestMapping(path="/readEducationBoard/{id}", method = RequestMethod.GET)
	public EducationBoard readEducationBoard(@PathVariable("id") Integer id)
	{
		return edRepo.findById(id).get();
	}
}
