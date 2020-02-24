import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { RecruiterService } from '../recruiter/recruiter.service';
import { RecruiterContactService } from './recruiter-contact.service';

@Component({
  selector: 'recruiter-contact',
  templateUrl: './recruiter-contact.component.html',
  styleUrls: ['./recruiter-contact.component.css']
})
export class RecruiterContactComponent implements OnInit {
  recruiterContactForm;
  recruiterContacts = [];
  recruiters = [];
  constructor(private formBuilder: FormBuilder, private recruiterService: RecruiterService, private recruiterContactService: RecruiterContactService) { 
    this.recruiterContactForm = formBuilder.group({
      id:new FormControl(''),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      mobileNumber: new FormControl('',Validators.required),
      emailId: new FormControl('', Validators.required),
      designation: new FormControl('', Validators.required),
      recruiter:this.formBuilder.group({
        id: new FormControl('',Validators.required)
      })
    });    
  }

  ngOnInit() {
    this.readRecruiterContacts();   
    this.recruiterService.readRecruiters().subscribe(
      results => {      
        this.recruiters = results;
        
      }
    )
  }
  
  saveRecruiterContact() {  
    this.recruiterContactService.saveRecruiterContact(this.recruiterContactForm.value).subscribe(
      results => {
        this.recruiterContactForm.reset();
        console.log(results);      
        this.readRecruiterContacts();
      }
    )
  }
  readRecruiterContacts() {
    this.recruiterContactService.readRecruiterContacts().subscribe(
      results => {
        this.recruiterContacts = results;
      }
    )
  }
  readRecruiterContact(id) {
    this.recruiterContactService.readRecruiterContact(id).subscribe(
      results => {
        this.recruiterContactForm.patchValue(results);
      }
    )
  }
  deleteRecruiterContact(id) {
    this.recruiterContactService.deleteRecruiterContact(id).subscribe(
      results => {
        console.log(results);
        this.readRecruiterContacts();
      }

    )
  } 

 
  get firstName(){
    return this.recruiterContactForm.get('firstName');
  }
  get lastName(){
    return this.recruiterContactForm.get('lastName');
  }
  get mobileNumber(){
    return this.recruiterContactForm.get('mobileNumber');
  }
  get emailId(){
    return this.recruiterContactForm.get('emailId');
  }
  get designation(){
    return this.recruiterContactForm.get('designation');
  }
  get recruiterId(){
    return this.recruiterContactForm.get('recruiter').get('id');
   
  }
}
