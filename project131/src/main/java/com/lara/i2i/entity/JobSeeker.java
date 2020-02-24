package com.lara.i2i.entity;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.JoinColumn;


import com.fasterxml.jackson.annotation.JsonIgnore;

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
	private Boolean isMarried; //True for married and false Unmarrid
	
	@ManyToOne
	private JobType jobType;
	
	private String profilePicUrl;
	private Long aadharNo;
	private Integer panNo;
	
	@ManyToOne
	private Location currentLocation;
	
	private Double yearsOfExp;
	private String profileSummary;
	private String email;
	private String currentPassword;
	
	
	@OneToMany(mappedBy = "jobSeeker")
	@JsonIgnore
	private List<MobileNo> mobileNos = new ArrayList<MobileNo>();
	

	

	
}
