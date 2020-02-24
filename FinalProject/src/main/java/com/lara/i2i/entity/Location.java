package com.lara.i2i.entity;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Location {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	private String name;
	private String locationDesc;
	@ManyToOne
	private District district;
	@OneToMany(mappedBy = "currentLocation")
	@JsonIgnore
	private List<JobSeeker> jobSeekers = new ArrayList<JobSeeker>();
	
	@ManyToMany(mappedBy = "location")
	@JsonIgnore
	private List<JobSeeker> jobSeeker = new ArrayList<JobSeeker>();
}
