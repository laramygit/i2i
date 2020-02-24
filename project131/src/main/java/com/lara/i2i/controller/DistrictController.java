package com.lara.i2i.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.lara.i2i.entity.District;
import com.lara.i2i.repository.DistrictRepository;

@RestController
@CrossOrigin(origins= {"http://localhost:4200"})
public class DistrictController {
	@Autowired
	private DistrictRepository districtRepo;
	
	@RequestMapping(path="/saveDistrict", method=RequestMethod.POST)
	public District saveDistrict(@RequestBody District district)
	{
		districtRepo.save(district);
		return district;
	}
	
	@RequestMapping(path="/readDistricts", method=RequestMethod.GET)
	public List<District> readDistricts()
	{
		return (List<District>) districtRepo.findAll();
	}
	
	@RequestMapping(path="/readDistrict/{id}", method=RequestMethod.GET)
	public District readDistrict(@PathVariable("id") Integer id)
	{
		return districtRepo.findById(id).get();
	}
	
	@RequestMapping(path="/deleteDistrict/{id}", method=RequestMethod.DELETE)
	public Integer deleteDistrict(@PathVariable("id") Integer id)
	{
		districtRepo.deleteById(id);
		return id;
	}		
   //We created In findDistrictsInOneState
	@RequestMapping(path="/readDistrictsInOneState/{stateId}", method=RequestMethod.GET)
	public List<District> readDistrictsInOneState(@PathVariable("stateId") Integer stateId)
	{
		return (List<District>) districtRepo.findDistrictsInOneState(stateId);
	}
	
}







