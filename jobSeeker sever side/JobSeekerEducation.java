package com.lara.i2i.entity;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;


import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class JobSeekerEducation
{
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	@OneToOne
	private JobSeeker jobSeeker;
	
	private Integer yop;
	private Double percentage;
	private String achievements;
	

}
