package com.lara.i2i.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "job_seeker_skills")
@IdClass(JobSeekerSkillINew.class)
public class JobSeekerSkill {
	
	    @Id
	    @ManyToOne
	    @JoinColumn(name = "skill_id", referencedColumnName = "id")
	    private Skill skill;

	    @Id
	    @ManyToOne
	    @JoinColumn(name = "job_seekes_id", referencedColumnName = "id")
	    private JobSeeker jobSeeker;
      
	    //Here we are adding two field 
	    
	    @JoinColumn(name = "full_name")
	    private String fullName;

	    @JoinColumn(name = "sk_name")
	    private String skName;
}
