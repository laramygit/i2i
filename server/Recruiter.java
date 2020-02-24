package com.lara.i2i.entity;

import java.io.Serializable;
import java.util.ArrayList;
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
public class Recruiter implements Serializable{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String nameOfOrganization;
	private String description;
	private String websiteUrl;
	private Long landlineNumber;
	private String userName;
	private String currentPassword; 
	
	@ManyToOne
	@JoinColumn	
	private Location location;
	
	@OneToOne(cascade=CascadeType.ALL,mappedBy = "recruiter")	
	@JsonIgnore
	private RecruiterContact recruiterContact;
	
	@OneToMany(cascade=CascadeType.MERGE,mappedBy = "recruiter")	
	@JsonIgnore
	private List<RecruiterCorrespondence> recruiterCorrespondences =new ArrayList<RecruiterCorrespondence>();

	
	
	
	
	
	
}
