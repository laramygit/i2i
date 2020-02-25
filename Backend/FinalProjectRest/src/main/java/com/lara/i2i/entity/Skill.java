package com.lara.i2i.entity;



import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;

import lombok.Getter;
import lombok.Setter;


@Entity
@Setter
@Getter
public class Skill {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	private String skillName;
	
	
//	 @ManyToMany(mappedBy = "skills")
//	 private List<JobSeeker> jobSeekres;
	 
	 
	 @JoinColumn(name = "sk_name")
	  private String skName;
	
	 
	    @OneToMany(mappedBy = "skillss")
	    private List<JobSeekerSkillINew> jobSeekerSkillNews;
	
	 
	

}
