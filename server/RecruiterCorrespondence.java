package com.lara.i2i.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class RecruiterCorrespondence {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String firstName;
	private String lastName;
	private Long mobileNumber;
	private String emailId;
	private Boolean recoverAvailable;
	
	@ManyToOne
	@JoinColumn(name="recruiter_id")
	private Recruiter recruiter;

}
