import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { JobSeekerService } from './job-seeker.service';
import { JobTypeService } from '../job-type/job-type.service';
import { LocationService } from '../location/location.service';
import { DatePipe } from '@angular/common';
import { MediumService } from '../medium/medium.service';
import { EducationalBoardService } from '../educational-board/educational-board.service';
import { EducationService } from '../education/education.service';

@Component({
  selector: 'job-seeker',
  templateUrl: './job-seeker.component.html',
  styleUrls: ['./job-seeker.component.css']
})
export class JobSeekerComponent implements OnInit 
{
  jobTypes = [];
  locations = [];
  jobSeekerForm;
  jobSeekers = [];
  educationalBoards = [];
  mediums = [];
  educations = [];


  constructor(private formBuilder: FormBuilder,
              private jobTypeService: JobTypeService,
              private locationService: LocationService,
              private jobSeekerService: JobSeekerService,
              private mediumService: MediumService,
              private boardService: EducationalBoardService,
              private educationService:  EducationService,
              private datePipe: DatePipe)  {
    this.jobSeekerForm = formBuilder.group({
      id: new FormControl(''),
      firstName: new FormControl('',Validators.required),
      lastName: new FormControl('',Validators.required),
      dob: new FormControl('',Validators.required),
      gender: new FormControl('unknown'),
      isMarried: new FormControl('unknown'),
      jobType: formBuilder.group({
        id: new FormControl('', Validators.required)
       /*  name: new FormControl('', Validators.required) */
        
      }),
      profilePicUrl: new FormControl('',Validators.required),
      aadharNo: new FormControl('',Validators.required),
      panNo: new FormControl('',Validators.required),
      currentLocation: formBuilder.group({
        id: new FormControl('',Validators.required)
       /*  name: new FormControl('', Validators.required) */
         }),
         education: formBuilder.group({
          id: new FormControl('',Validators.required)
         /*  name: new FormControl('', Validators.required) */
           }),
           educationalBoard: formBuilder.group({
            id: new FormControl('',Validators.required)
            /* name: new FormControl('', Validators.required) */
             }),
             medium: formBuilder.group({
              id: new FormControl('',Validators.required)
              /* name: new FormControl('', Validators.required) */
               }),
      yearsOfExp: new FormControl('',Validators.required),
      profileSummary: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
      currentPassword: new FormControl('',Validators.required),
    });
}

  ngOnInit() {
    
    this.readJobSeekers();
    this.jobTypeService.readJobTypes().subscribe(
      results => {
        this.jobTypes = results;
      }
    );

    this.locationService.readLocations().subscribe(
      results => {
        this.locations = results;
      }
    )

    this.educationService.readEducations().subscribe(
      results => {
        this.educations = results;
      }
    )

    this.boardService.readBoards().subscribe(
      results => {
        this.educationalBoards = results;
      }
    )

    this.mediumService.readMediums().subscribe(
      results => {
        this.mediums = results;
      }
    )
}

get firstName()
{
  return this.jobSeekerForm.get('firstName');
}

get lastName()
{
  return this.jobSeekerForm.get('lastName');
}

get dob()
{
  return this.jobSeekerForm.get('dob');
}

get gender()
{
  return this.jobSeekerForm.get('gender');
}

get isMarried()
{
  return this.jobSeekerForm.get('isMarried');
}

get jobTypeId()
{
  return this.jobSeekerForm.get('jobType').get('id');
}

get profilePicUrl()
{
  return this.jobSeekerForm.get('profilePicUrl');
}

get aadharNo()
{
  return this.jobSeekerForm.get('aadharNo');
}

get panNo()
{
  return this.jobSeekerForm.get('panNo');
}

get locationId()
{
  return this.jobSeekerForm.get('currentLocation').get('id');
}

get educationId()
{
  return this.jobSeekerForm.get('education').get('id');
}

get mediumId()
{
  return this.jobSeekerForm.get('medium').get('id');
}

get educationalBoardId()
{
  return this.jobSeekerForm.get('educationalBoard').get('id');
}

get yearsOfExp()
{
  return this.jobSeekerForm.get('yearsOfExp');
}

get profileSummary()
{
  return this.jobSeekerForm.get('profileSummary');
}

get email()
{
  return this.jobSeekerForm.get('email');
}

get currentPassword()
{
  return this.jobSeekerForm.get('currentPassword');
}




saveJobSeeker()
  {
     //alert(JSON.stringify(this.jobSeekerForm.value));
   /*   let jsonStr = JSON.stringify(this.jobSeekerForm.value);
     let jsonObj = JSON.parse(jsonStr); */

    this.jobSeekerService.saveJobSeeker(this.jobSeekerForm.value).subscribe(
      results =>{
        console.log(results);
        this.readJobSeekers();
        this.jobSeekerForm.reset();
      }
    )
  }

  readJobSeekers()
  {
    this.jobSeekerService.readJobSeekers().subscribe(
      results => {
        this.jobSeekers = results;
      }
    )
  }

  deleteJobSeeker(id)
  {
    this.jobSeekerService.deleteJobSeeker(id).subscribe(
      results => {
       console.log(results);
       this.readJobSeekers();
      }
    )
    
  }

  readJobSeeker(id)
  {
    this.jobSeekerService.readJobSeeker(id).subscribe(
      results => {
       // alert(JSON.stringify(results));
        this.jobSeekerForm.patchValue(results);
        this.jobSeekerForm.patchValue({
          dob: this.datePipe.transform(results.dob, "yyyy-MM-dd")
        });
         
      }
    );
  }


}
