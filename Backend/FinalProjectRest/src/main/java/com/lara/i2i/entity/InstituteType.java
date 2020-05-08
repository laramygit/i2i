package com.lara.i2i.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.Setter;

@Entity
@Setter
@Getter
public class InstituteType {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer instituteId;
	
	private String instituteName;
	
	private String instituteDesc;
	
	
	@OneToMany(mappedBy="instituteType")
	@JsonIgnore
	private List<Experience> experiences = new ArrayList<Experience>();
	

}
