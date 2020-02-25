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
import com.lara.i2i.entity.Experience;
import com.lara.i2i.repository.EducationBoardRepository;

@RestController
@CrossOrigin(origins= {"http://localhost:4200"})
public class EducationBoardController {
	
	@Autowired
	private EducationBoardRepository boardRepo;
	
	
	@RequestMapping(path="/saveBoard", method=RequestMethod.POST)
	public EducationBoard saveBoard(@RequestBody EducationBoard board) {
		return boardRepo.save(board);
	}
	
	@RequestMapping(path="/readBoards", method=RequestMethod.GET)
	public List<EducationBoard> readBoards(){
		return (List<EducationBoard>) boardRepo.findAll();
	}
	
	@RequestMapping(path="/readBoard/{id}", method=RequestMethod.GET)
	public EducationBoard readBoard(@PathVariable("id") Integer id) {
		EducationBoard eduBoard = boardRepo.findById(id).get();
		return eduBoard;
	}
	
	@RequestMapping(path="/deleteBoard/{id}", method=RequestMethod.DELETE)
	public Integer deleteBoard(@PathVariable("id") Integer id) {
		boardRepo.deleteById(id);
		return id;
	}


}
