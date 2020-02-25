import { Component, OnInit } from '@angular/core';
import { JobSeekerSkillService } from './job-seeker-skill.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { JobSeekerService } from '../job-seeker/job-seeker.service';

@Component({
  selector: 'app-job-seeker-skill',
  templateUrl: './job-seeker-skill.component.html',
  styleUrls: ['./job-seeker-skill.component.css']
})
export class JobSeekerSkillComponent implements OnInit {

  jobSeekerSkillForm;
  jobSeekerSkills = [];
  jobSeekers = [];
  constructor(private jobSeekerSkillService: JobSeekerSkillService,
              private formBuilder: FormBuilder,
              private jobSeekerService: JobSeekerService) {

                this.jobSeekerSkillForm = formBuilder.group({
                  id: new FormControl(''),
                  skillName: new FormControl('', Validators.required),
                  jobSeeker: formBuilder.group({
                    id: new FormControl('', Validators.required)
                    })
                  })

               }

/* Used for validation message */
  get id(){
    return this.jobSeekerSkillForm.get('id');
  }

  get skillName(){
    return this.jobSeekerSkillForm.get('skillName');
  }

  /*--- mind it ---*/
get jobSeekerId(){
  return this.jobSeekerSkillForm.get('jobSeeker').get('id');
}


  ngOnInit() {

    this.jobSeekerService.readJobSeekers().subscribe(results =>{
      this.jobSeekers = results;
    });

    this.readSkills();
  }

   /* IST SERVICE METHOD CALLING */
   saveSkill(){
    if(this.jobSeekerSkillForm.invalid){
     this.skillName.toched = true;
     // jobSeeker: JobSeeker;
     this.jobSeekerId.touched = true;
     return ;
  } 
   
  // alert(JSON.stringify(this.jobSeekerForm.value)); used for testing field.
  this.jobSeekerSkillService.saveSkill(this.jobSeekerSkillForm.value).subscribe(results =>{
    console.log(results);
  });
 }

/* 2ND SERVICE METHOD CALLING */
readSkills(){
  this.jobSeekerSkillService.readSkills().subscribe(results =>{
    //this.jobSeekers = results;
    this.jobSeekerSkills = results;
    console.log(results);
  });
 }


 /* 3RD SERVICE METHOD CALLING */
 readSkill(id){
   this.jobSeekerSkillService.readSkill(id).subscribe(results =>{
     this.jobSeekerSkillForm.patchValue(results);
    // this.jobSeekerForm.setValue(results); used for setting some feild;
   });

 }

/* 4TH SERVICE METHOD CALLING */
deleteSkill(id){
   this.jobSeekerSkillService.deleteSkill(id).subscribe(results =>{
     console.log(results);
     this.readSkills();
   });
 }


}
