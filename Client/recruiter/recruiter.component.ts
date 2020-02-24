import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location/location.service';

import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { RecruiterService } from './recruiter.service';

@Component({
  selector: 'recruiter',
  templateUrl: './recruiter.component.html',
  styleUrls: ['./recruiter.component.css']
})
export class RecruiterComponent implements OnInit {
  recruiterForm;
  locations = [];
  recruiters = [];
  constructor(private formBuilder: FormBuilder, private locationService: LocationService, private recruiterService: RecruiterService) {

    this.recruiterForm = formBuilder.group({  
      id: new FormControl(''),   
      nameOfOrganization: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      websiteUrl: new FormControl('', Validators.required),
      landlineNumber: new FormControl('', Validators.required),
      userName: new FormControl('', Validators.required),
      currentPassword: new FormControl('', Validators.required),
      location: this.formBuilder.group({
        id: new FormControl('',Validators.required)
      })
    });
  }

  ngOnInit() {
    this.readRecruiters();
    this.locationService.readLocations().subscribe(    
      results => {
        this.locations = results;
      }
    )
  }

  saveRecruiter() {
    this.recruiterService.saveRecruiter(this.recruiterForm.value).subscribe(
      results => {
        this.recruiterForm.reset();
        console.log(results);
        this.readRecruiters();
      }
    )
  }
  get id(){
    return this.recruiterForm.get('id');
  }
  get nameOfOrganization() {
    return this.recruiterForm.get('nameOfOrganization');
  }

  get description() {
    return this.recruiterForm.get('description');
  }
  get websiteUrl() {
    return this.recruiterForm.get('websiteUrl');
  }

  get landlineNumber() {
    return this.recruiterForm.get('landlineNumber');
  }
  get userName() {
    return this.recruiterForm.get('userName');
  }
  get currentPassword() {
    return this.recruiterForm.get('currentPassword');
  }

  get locationId() {
    return this.recruiterForm.get('location').get('id');
  }

  readRecruiters() {
    this.recruiterService.readRecruiters().subscribe(
      results => {
        this.recruiters = results;
      }
    )
  }

  readRecruiter(id) {
    this.recruiterService.readRecruiter(id).subscribe(
      results => {
        this.recruiterForm.patchValue(results);
        this.readRecruiters();
      }
    )
  }
  deleteRecruiter(id) {
    this.recruiterService.deleteRecruiter(id).subscribe(
      results => {
        console.log(results);
        this.readRecruiters();
      }
    )
  }
}
