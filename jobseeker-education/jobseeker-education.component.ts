import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { JobSeekerEducationService } from './jobseeker-education.service';
import { EducationService } from '../education/education.service';
import { LocationService } from '../location/location.service';
import { MediumService } from '../medium/medium.service';
import { EducationalBoardService } from '../educational-board/educational-board.service';
import { JobSeekerService } from '../job-seeker/job-seeker.service';

@Component({
  selector: 'jobseeker-education',
  templateUrl: './jobseeker-education.component.html',
  styleUrls: ['./jobseeker-education.component.css']
})
export class JobseekerEducationComponent implements OnInit 
{
  jobForm;
  jobSeekerEducations = [];
  educations = [];
  mediums = [];
  educationalBoards = [];
  locations = [];
  jobSeekers = [];


  constructor(private formBuilder: FormBuilder, 
              private service: JobSeekerEducationService,
             private jobSeekerService: JobSeekerService) 
  {
    this.jobForm = formBuilder.group({
      id: new FormControl('', Validators.required),
      yop: new FormControl('', Validators.required),
      achievements: new FormControl('', Validators.required),
      percentage: new FormControl('', Validators.required),
   
     jobSeeker: formBuilder.group({
      id: new FormControl('', Validators.required)
     /*  name: new FormControl('', Validators.required) */
     
    })
  });
    
    
   
   }

  ngOnInit() 
  {
    this.readJobSeekerEducations();
   
   
    this.jobSeekerService.readJobSeekers().subscribe(
      results => {
        this.jobSeekers = results;
      }
    );
   
  }

  get yop()
  {
    return this.jobForm.get('yop');
  }

  get percentage()
  {
    return this.jobForm.get('percentage');
  }
  get achievements()
  {
    return this.jobForm.get('achievements');
  }
 
 
  get jobSeekerId()
  {
    return this.jobForm.get('jobSeeker').get('id');
  }

 


  saveJobSeekerEducation(){
     
  //  let jsonStr = JSON.stringify(this.jobForm.value);
  //   let jsonObj = JSON.parse(jsonStr);
    this.service.saveJobSeekerEducation(this.jobForm.value).subscribe(
      results =>{
        console.log(results);
       // this.jobForm.reset();
        this.readJobSeekerEducations();
      }
    )
  }


  readJobSeekerEducations() {
    this.service.readJobSeekerEducations().subscribe(
      results => {
        this.jobSeekerEducations = results;
        console.log(results);
        
      }
    )
  }
  deleteJobSeekerEducation(id)
    {
      this.service.deleteJobSeekerEducation(id).subscribe(
        results => {
          console.log(results);
          this.readJobSeekerEducations();
        }
      )
    }

    readJobSeekerEducation(id)
    {
      
     /*  let jsonStr = JSON.stringify(this.jobForm.value);
      let jsonObj = JSON.parse(jsonStr); */
      this.service.readJobSeekerEducation(id).subscribe(
        results =>{
          this.jobForm.patchValue(results);
          console.log(results);
        }
      )
    }


}
