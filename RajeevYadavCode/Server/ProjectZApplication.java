package com.lara.i2i;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.lara.i2i.entity.EducationBoard;
import com.lara.i2i.entity.InstituteType;
import com.lara.i2i.entity.Recruiter;
import com.lara.i2i.repository.EducationBoardRepository;
import com.lara.i2i.repository.InstituteTypeRepository;
import com.lara.i2i.repository.RecruiterRepository;

@SpringBootApplication
public class ProjectZApplication implements CommandLineRunner {
	
	@Autowired
	private RecruiterRepository recruiterRepository;
	
	@Autowired
	private EducationBoardRepository educationBoardRepository;
	
	@Autowired
	private InstituteTypeRepository instituteTypeRepo;

	public static void main(String[] args) {
		SpringApplication.run(ProjectZApplication.class, args);
		System.out.println("<< DONE >>");
	}
		@Override
		public void run(String... args) throws Exception {
	        	Recruiter r = new Recruiter();
	    		r.setNameOrg("LNCT");
	    		r.setSomeDesc("Good");
	    		r.setWebsiteUrl("lnct.com");
	    		r.setLandlineNo(555554);
	    	
	    		recruiterRepository.saveAll(Arrays.asList(r));

	    		EducationBoard e1 = new EducationBoard();
	    		e1.setName("CBSC");
	    		
	    		EducationBoard e2 = new EducationBoard();
	    		e2.setName("IB");
	    		
	    		EducationBoard e3 = new EducationBoard();
	    		e3.setName("MP BOARD");
	    		//r.getEducationBoard().addAll(Arrays.asList(e1, e2, e3));
	    		educationBoardRepository.saveAll(Arrays.asList(e1, e2, e3));
	    		
	    		//recruiterRepository.saveAll(Arrays.asList(r));
	    		
	    		InstituteType i1 = new InstituteType();
	    		i1.setName("Kinder garden");
	    		
	    		InstituteType i2 = new InstituteType();
	    		i2.setName("High school section");
	    		
	    		InstituteType i3 = new InstituteType();
	    		i3.setName("10+2 section");
	    		
	    		instituteTypeRepo.saveAll(Arrays.asList(i1, i2, i3));

	         
	    		
	    		
	    		
	            
	        }
	 }
	

