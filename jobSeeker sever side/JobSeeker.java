package com.lara.i2i.entity;


import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class JobSeeker 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String firstName;
	private String lastName;
	private Date dob;
	private String gender;   //M for Male and F for Female
	private Boolean isMarried;		//true for married and false for un-married
	
	@ManyToOne
	@JoinColumn
	private JobType jobType;
	
	private String profilePicUrl;
	private Long aadharNo;
	private String panNo;
	
	@ManyToOne
	@JoinColumn
	private Location currentLocation;
	
	private Double yearsOfExp;
	private String profileSummary;
	private String email;
	private String currentPassword;
	@ManyToOne
	@JoinColumn(name="education_id")	
	private Education education;
	
	@ManyToOne
	@JoinColumn(name="medium_id")	
	private Medium medium;
	
	@ManyToOne		
	private EducationalBoard educationalBoard;
	
	@OneToOne(mappedBy="jobSeeker")	
	@JsonIgnore
	private JobSeekerEducation jobSeekerEducation; 
	

	
//	@OneToMany
//	@JsonIgnore
//	private List<Experiance> experiances = new ArrayList<Experiance>();
	
//	@OneToMany(mappedBy="jobSeeker", cascade=CascadeType.ALL)
//	@JsonIgnore
//	private List<Email> emails = new ArrayList<Email>();
	
	

	
}
