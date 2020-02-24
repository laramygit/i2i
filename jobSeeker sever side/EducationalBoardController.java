package com.lara.i2i.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.lara.i2i.entity.EducationalBoard;
import com.lara.i2i.repository.EducationalBoardRepository;

@RestController
@CrossOrigin(origins= {"http://localhost:4200"})
public class EducationalBoardController 
{
	@Autowired
	private EducationalBoardRepository  boardRepo;
	
	@RequestMapping(path="/saveBoard", method=RequestMethod.POST)
	public EducationalBoard saveBoard(@RequestBody EducationalBoard board)
	{
		boardRepo.save(board);
		return board;
		
	}
	
	@RequestMapping(path="/readBoard/{id}", method=RequestMethod.GET)
	public EducationalBoard readBoard(@PathVariable ("id") Integer id)
	{
		return boardRepo.findById(id).get();
		
	}
	
	@RequestMapping(path="/readBoards", method=RequestMethod.GET)
	public List<EducationalBoard> readBoards()
	{
		return (List<EducationalBoard>) boardRepo.findAll();
		
	}
	
	@RequestMapping(path="/deleteBoard/{id}", method=RequestMethod.DELETE)
	public Integer deleteBoard(@PathVariable ("id") Integer id)
	{
		boardRepo.deleteById(id);
		return id;
		
	}


}
