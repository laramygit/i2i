package com.lara.i2i.entity;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.JoinColumn;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class JobSeeker {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String firstName;
	private String lastName;
	private Date dob;
	private String gender; //M for Male and F for Female
	private Boolean isMarried; //true for married and false for un-married
	@ManyToOne
	private JobType jobType;
	private String profilePicUrl;
	private Long aadharNo;
	private String panNo;
	@ManyToOne
	private Location currentLocation;
	private Double yearsOfExp;

	private String profileSummary;
	private String email;
	private String currentPassword;
		
	@ManyToMany
	@JoinTable(name="jobSeeker_location", 
	joinColumns= {@JoinColumn(columnDefinition = "jobSeeker_id")},
    inverseJoinColumns = {@JoinColumn(columnDefinition = "location_id")})
	private List<Location> location = new ArrayList<Location>();
	
	@ManyToMany
	@JoinTable(name="jobSeeker_skill", 
	joinColumns= {@JoinColumn(columnDefinition = "jobSeeker_id")},
    inverseJoinColumns = {@JoinColumn(columnDefinition = "skill_id")})
	private List<Skill> skill = new ArrayList<Skill>();
	
}
