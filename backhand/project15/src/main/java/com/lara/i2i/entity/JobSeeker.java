package com.lara.i2i.entity;

import java.sql.Date;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

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
	private String gender; //M for Male F for Female
	private String isMarried; //True for married and false Unmarrid
	
	@ManyToOne(cascade = CascadeType.MERGE) 
	private JobType jobType;
	
	private String profilePicUrl;
	private Long aadharNo;
	private String panNo;
	
	@ManyToOne(cascade = CascadeType.MERGE)
	private Location currentLocation;
	
	private Double yearsOfExp;
	private String profileSummary;
	private String email;
	private String currentPassword;
	
	
	
}

