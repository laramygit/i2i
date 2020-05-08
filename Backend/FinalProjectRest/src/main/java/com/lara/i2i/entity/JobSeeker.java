package com.lara.i2i.entity;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

import org.json.JSONArray;
import org.json.JSONObject;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity 
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class JobSeeker {
    
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String firstName;
	private String lastName;
	private Date dob;
	  
	private String gender; //M for Male F for Female
	private Boolean isMarried; //True for married and false Unmarrid
	
	@ManyToOne //Many Job seeker one Job Type
	private JobType jobType;
	
	private String profilePicUrl;
	private String aadharNo;
	private String panNo;
	
	@ManyToOne//Many Job Seeker Under One LocationId
	private Location currentLocation;
	
	private Double yearsOfExp;
	private String profileSummary;
	private String email;
	private String currentPassword;
	
	
//	New Code is adding for assignment
	@OneToMany(mappedBy="jobSeeker")
	@JsonIgnore
	private List<Experience> experiences = new ArrayList<Experience>();
	
	
	
	
//	Many to Many Start here
	
//	    @ManyToMany
//	    @JoinTable(
//	            name = "jobSeeker_skills",
//	            joinColumns = {@JoinColumn(name = "jobSeeker_id", referencedColumnName = "id")},
//	            inverseJoinColumns = {@JoinColumn(name = "skill_id", referencedColumnName = "id")}
//	    )
//	    private List<Skill> skills;
	 
	 
	    @JoinColumn(name = "full_name")
	    private String fullName;
	    
	    @OneToMany(mappedBy = "jobSeekerss")
	    private List<JobSeekerSkillINew> jobSeekerSkillNews;
	
		   
	
}
