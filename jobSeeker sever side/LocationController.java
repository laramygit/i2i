package com.lara.i2i.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


import com.lara.i2i.entity.Location;
import com.lara.i2i.repository.LocationRepository;

@RestController
@CrossOrigin(origins= {"http://localhost:4200"})
public class LocationController {

	@Autowired
	private LocationRepository locationRepo;
	
	
	@RequestMapping(path="/saveLocation", method=RequestMethod.POST)
	public Location saveLocation(@RequestBody Location location)
	{
		locationRepo.save(location);
		return location;
	}
	
	@RequestMapping(path="/readLocations", method=RequestMethod.GET)
	public List<Location> readLocations()
	{
		return (List<Location>) locationRepo.findAll();
	}
	
	@RequestMapping(path="/readLocation/{id}", method=RequestMethod.GET)
	public Location readLocation(@PathVariable("id") Integer id)
	{
		return locationRepo.findById(id).get();
	}
	
	@RequestMapping(path="/deleteLocation/{id}", method=RequestMethod.DELETE)
	public Integer deleteLocation(@PathVariable("id") Integer id)
	{
		locationRepo.deleteById(id);
		return id;
	}		
	
	@RequestMapping(path="/readLocationsInOneDistrict/{districtId}", method=RequestMethod.GET)
	public List<Location> readLocationsInOneDistrict(@PathVariable ("districtId") Integer districtId)
	{
		System.out.println("readDistrictsInOneState()");
		List<Location> locations =(List<Location>) locationRepo.findLocationsInOneDistrict(districtId);
		return locations;
	}
	
}
