import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { RecruiterCorrespondenceService } from './recruiter-correspondence.service';
import { RecruiterService } from '../recruiter/recruiter.service';

@Component({
  selector: 'recruiter-correspondence',
  templateUrl: './recruiter-correspondence.component.html',
  styleUrls: ['./recruiter-correspondence.component.css']
})
export class RecruiterCorrespondenceComponent implements OnInit {
  recruiters=[];
  recruiterCorrespondences=[];
  recruiterCorrespondenceForm;
  constructor(private formBuilder:FormBuilder,private recruiterService: RecruiterService, private recruiterCorrespondenceService:RecruiterCorrespondenceService) {
    this.recruiterCorrespondenceForm = formBuilder.group({
      id: new FormControl(''),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      mobileNumber: new FormControl('', Validators.required),
      emailId: new FormControl('', Validators.required),
      recoverAvailable: new FormControl('', Validators.required),
      recruiter:this.formBuilder.group({
        id: new FormControl('',Validators.required)
      })
    })
   }
  ngOnInit() {
    this.readRecruiterCorrespondences();
    this.recruiterService.readRecruiters().subscribe(
      results => {      
        this.recruiters = results;
        alert(results);
        
      }
    )
  }

  
  saveRecruiterCorrespondence(){
    this.recruiterCorrespondenceService.saveRecruiterCorrespondence(this.recruiterCorrespondenceForm.value).subscribe(
      results => {
        this.recruiterCorrespondenceForm.reset();
        console.log(results);
        this.readRecruiterCorrespondences();
      }
    )
  }
  readRecruiterCorrespondences(){
  this.recruiterCorrespondenceService.readRecruiterCorrespondences().subscribe(
    results=>{
      this.recruiterCorrespondences=results;
    }
  )

  }
  readRecruiterCorrespondence(id){
    this.recruiterCorrespondenceService.readRecruiterCorrespondence(id).subscribe(
        results=>{
        this.recruiterCorrespondenceForm.setValue(results);
        this.readRecruiterCorrespondences();
      }
    )
  
    }

    deleteRecruiterCorrespondence(id){
      this.recruiterCorrespondenceService.deleteRecruiterCorrespondence(id).subscribe(
          results=>{
          console.log(results);
          this.readRecruiterCorrespondences();
        }
      )
    
      }


      get firstName() {
        return this.recruiterCorrespondenceForm.get('firstName');
      }
    
      get lastName() {
        return this.recruiterCorrespondenceForm.get('lastName');
      }
      get mobileNumber() {
        return this.recruiterCorrespondenceForm.get('mobileNumber');
      }
      get emailId() {
        return this.recruiterCorrespondenceForm.get('emailId');
      }
      get recoverAvailable() {
        return this.recruiterCorrespondenceForm.get('recoverAvailable');
      }
      get recruiterId(){
        return this.recruiterCorrespondenceForm.get('recruiter').get('id');
       
      }
}
