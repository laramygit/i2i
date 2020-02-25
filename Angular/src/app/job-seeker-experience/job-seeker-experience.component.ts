import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { JobSeekerService } from '../job-seeker/job-seeker.service';
import { InstituteTypeService } from '../institute-type/institute-type.service';
import { JobSeekerExperienceService } from './job-seeker-experience.service';
import { EducationBoardService } from '../education-board/education-board.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-job-seeker-experience',
  templateUrl: './job-seeker-experience.component.html',
  styleUrls: ['./job-seeker-experience.component.css']
})
export class JobSeekerExperienceComponent implements OnInit {

  /* Tring multiple select value in dropdown */
   disabled = false;
   dropdownSettings: any = {};
   limitSelection = false;
   showFilter = false;
  /* ----------------------- */

  jobSeekers = [];
  instituteTypes = [];
  jobSeekerExperienceForm;
  jobSeekerExperiences = [];
  educationBoards = [];


  constructor(private formBuilder: FormBuilder,
              private jobSeekerService: JobSeekerService,
              private instituteTypeService: InstituteTypeService,
              private jobSeekerExperienceService: JobSeekerExperienceService,
              private educationBoardService : EducationBoardService,
              private datePipe: DatePipe) { 
               
      /* Here we r defining form feild */
   this.jobSeekerExperienceForm = formBuilder.group({
    experienceId: new FormControl(''),
    duration: new FormControl('', Validators.required),
    designation: new FormControl('', Validators.required),
    startDate: new FormControl('', Validators.required),
    jobSeeker: formBuilder.group({
      id: new FormControl('', Validators.required)
    }),
    instituteType: formBuilder.group({
      instituteId: new FormControl('', Validators.required)
    }),
    educationBoard: formBuilder.group({
      educationBoardId: new FormControl('', Validators.required)
    }),
  

  });

}


	
/* Here we are writing all getter methods */
   
get experienceId(){
  return this.jobSeekerExperienceForm.get('experienceId');
}
get designation(){
  return this.jobSeekerExperienceForm.get('designation');
}
get duration(){
  return this.jobSeekerExperienceForm.get('duration')
}
get startDate(){
  return this.jobSeekerExperienceForm.get('startDate');
}
/*--- mind it ---*/
get instituteTypeId(){
  return this.jobSeekerExperienceForm.get('instituteType').get('instituteId');
}
/*--- mind it ---*/
get educationBoardId(){
  return this.jobSeekerExperienceForm.get('educationBoard').get('educationBoardId');
}

/*--- mind it ---*/
get jobSeekerId(){
  return this.jobSeekerExperienceForm.get('jobSeeker').get('id');
}



  ngOnInit() {

    this.instituteTypeService.readInstitutes().subscribe(results =>{
      this.instituteTypes = results;
    });

    this.educationBoardService.readBoards().subscribe(results =>{
      this.educationBoards = results;
    });

    this.jobSeekerService.readJobSeekers().subscribe(results =>{
      this.jobSeekers = results;
    });


    this.readExperiences();
  }



   /* IST SERVICE METHOD CALLING */
   saveExperience(){
    if(this.jobSeekerExperienceForm.invalid){
     this.designation.toched = true;
     this.duration.touched = true;
     this.startDate.touched = true;
     // jobSeeker: JobSeeker;
     this.instituteTypeId.touched = true;
     //	educationBoard: EducationBoard;
     this.educationBoardId.touched = true;
     //instituteType: InstituteType;
     this.jobSeekerId.touched = true;
     return ;
   } 
   
  // alert(JSON.stringify(this.jobSeekerForm.value)); used for testing field.
  this.jobSeekerExperienceService.saveExperience(this.jobSeekerExperienceForm.value).subscribe(results =>{
    console.log(results);
  });
 }

/* 2ND SERVICE METHOD CALLING */
readExperiences(){
  this.jobSeekerExperienceService.readExperiences().subscribe(results =>{
    //this.jobSeekers = results;
    this.jobSeekerExperiences = results;
    console.log(results);
  });
 }


 /* 3RD SERVICE METHOD CALLING */
 readExperience(id){
   this.jobSeekerExperienceService.readExperience(id).subscribe(results =>{
     this.jobSeekerExperienceForm.patchValue(results);
    // this.jobSeekerForm.setValue(results); used for setting some feild;
    this.jobSeekerExperienceForm.patchValue({
      startDate: this.datePipe.transform(results.startDate, "yyyy-MM-dd")
    });
   });

 }

/* 4TH SERVICE METHOD CALLING */
deleteExperience(id){
   this.jobSeekerExperienceService.deleteExperience(id).subscribe(results =>{
     console.log(results);
     this.readExperiences();
   });
 }

onItemSelect(item: any){
  console.log('onItemSelect', item);
}

onSelectAll(items: any){
  console.log('onItemSelectAll', items)
}

}
