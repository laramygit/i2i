package com.lara.i2i.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.*;

@Entity
@Getter
@Setter
public class Recruiter {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
    private String nameOrg;
    private String someDesc;
    private String websiteUrl;
    private Integer landlineNo;

    @ManyToMany(cascade = CascadeType.MERGE)
    @JoinTable(name = "recruiter_educationBoard",
    		  joinColumns= {@JoinColumn(columnDefinition="recruiter_id")}, 
	          inverseJoinColumns={@JoinColumn(columnDefinition="education_board_id")})
    private List<EducationBoard> educationBoard = new ArrayList<EducationBoard>();
    
    @ManyToMany(cascade = CascadeType.MERGE)
    @JoinTable(name = "recruiter_instituteType",
    		  joinColumns= {@JoinColumn(columnDefinition="recruiter_id")}, 
	          inverseJoinColumns={@JoinColumn(columnDefinition="instituteType_id")})
    private List<InstituteType> instituteType = new ArrayList<InstituteType>();
    

}

