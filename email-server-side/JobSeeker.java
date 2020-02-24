package com.lara.m1m.entity;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class JobSeeker {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	private String firstName;
	private String lastName;
	private Date dob;
	private String gender;
	private Boolean isMarried;
	@ManyToOne
	private JobType jobType;
	private String profilePicUrl;
	private Long adharNo;
	private String panNo;
	@ManyToOne
	private Location currentLocation;
	private Double yearsOfExp;
	private String profileSummary;
	private String email;
	private String currentPassword;
	
	@OneToMany(mappedBy="jobSeeker", cascade = CascadeType.ALL)
	@JsonIgnore
	private List<Email> emails = new ArrayList<Email>();

}
