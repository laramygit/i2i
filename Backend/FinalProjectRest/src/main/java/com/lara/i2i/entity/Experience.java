package com.lara.i2i.entity;


import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Getter;
import lombok.Setter;


@Entity
@Getter
@Setter
public class Experience {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer experienceId;
	
	private String duration;
	
	private Date startDate;
	
	private String designation;
    
	@ManyToOne
	private JobSeeker jobSeeker;
	
	@ManyToOne
	private InstituteType instituteType;
	
	@ManyToOne
	private EducationBoard educationBoard;
}
