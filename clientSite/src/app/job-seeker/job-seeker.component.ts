

import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location/location.service';

import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { JobTypeService } from '../job-type/job-type.service';
import { JobSeekerService } from './job-seeker.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'job-seeker',
  templateUrl: './job-seeker.component.html',
  styleUrls: ['./job-seeker.component.css']
})
export class JobSeekerComponent implements OnInit {
  jobTypes = [];
  locations = [];
  jobSeekerForm;
  jobSeekers = [];
  constructor(private formBuilder: FormBuilder,
              private jobTypeService: JobTypeService,
              private locatonService: LocationService,
              private jobSeekerService: JobSeekerService,
              private datePipe: DatePipe) 
  {

    this.jobSeekerForm = formBuilder.group({
      id: new FormControl(''),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      dob: new FormControl('', Validators.required),
      gender: new FormControl('unknown'),
      isMarried: new FormControl('unknown'), 
      jobType:formBuilder.group({
        id: new FormControl('', Validators.required),
      }),
      profilePicUrl: new FormControl('', Validators.required),
      aadharNo: new FormControl('', Validators.required),
      panNo: new FormControl('', Validators.required),
      currentLocation:formBuilder.group({
        id: new FormControl('', Validators.required),
      }),
      yearsOfExp: new FormControl('', Validators.required),
      profileSummary: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      currentPassword: new FormControl('', Validators.required)
    });

   }

  ngOnInit() {
    this.jobTypeService.readJobTypes().subscribe(
      results =>{
        this.jobTypes =results;

      }
    );
    this.locatonService.readLocations().subscribe(
      results =>{
        this.locations =results;
      }
    );
    this.readJobSeekers();

  }
  
  get id()
  {
    return this.jobSeekerForm.get('id');
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
      this.jobSeekerService.saveJobSeeker(this.jobSeekerForm.value).subscribe(
        results =>{
          console.log(results);
        }
      )
  }

  readJobSeekers()
  {
    this.jobSeekerService.readJobSeekers().subscribe(
      results =>{
        this.jobSeekers = results;
      }
    )
  };

  deleteJobSeeker(id)
  {
    this.jobSeekerService.deleteJobSeeker(id).subscribe(
      results =>
      {
        console.log(results);
        this.readJobSeekers();
      }
    )
  }

  readJobSeeker(id)
  {
    this.jobSeekerService.readJobSeeker(id).subscribe(
      results =>{
        this.jobSeekerForm.patchValue(results);
        this.jobSeekerForm.patchValue({
          dob: this.datePipe.transform(results.dob, "yyyy-MM-dd"),
        });
       
      }

    )
  }


}
