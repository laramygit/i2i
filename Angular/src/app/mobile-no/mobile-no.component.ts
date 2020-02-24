import { Component, OnInit } from '@angular/core';  
import { NgForm, FormBuilder, FormControl, Validators } from '@angular/forms';  
import { MobileNoService } from './mobileNo.service';
import { JobSeekerService } from '../job-seeker/job-seeker.service';

@Component({
   selector: 'mobile-no',
   templateUrl: './mobile-no.component.html',
   styleUrls: ['./mobile-no.component.css']
 })
export class MobileNoComponent implements OnInit{

   jobSeekers = [];
   mobileNos  = [];
   mobileNoForm;

   constructor(private mobileNoService: MobileNoService,
               private formBuilder: FormBuilder,
               private jobSeekerService: JobSeekerService){
                  
                 this.mobileNoForm = formBuilder.group({ 
                 id: new FormControl('', Validators.required),
                 mobileNo: new FormControl('', Validators.required),
                 verifiedStatus: new FormControl('unknown'),
                 //mind it
                 jobSeeker: formBuilder.group({
                    id: new FormControl('', Validators.required)
                  })
               })

   }

   //used for vaidation massages;
   get id()
   {
     return this.mobileNoForm.get('id');
   }

   get mobileNo()
   {
     return this.mobileNoForm.get('mobileNo');
   }
   get verifiedStatus()
   {
     return this.mobileNoForm.get('verifiedStatus');
   }
  // mind it
   get jobSeekerId()
  {
    return this.mobileNoForm.get('jobSeeker').get('id');
  }



   ngOnInit(){

      this.jobSeekerService.readJobSeekers().subscribe(results =>{
         this.jobSeekers = results;
      });
      
      this.readMobileNos();
   }

   saveMobileNo(){
      this.mobileNoService.saveMobileNo(this.mobileNoForm.value).subscribe(results =>{
         console.log(results);
         this.readMobileNos();
       console.log(results);
      })
      
   }

   readMobileNos(){
     this.mobileNoService.readMobileNos().subscribe(results =>{
        this.mobileNos = results;
      console.log(results);
        
     })  
   }

   readMobileNo(id)
   {
      this.mobileNoService.readMobileNo(id).subscribe(results =>{
         this.mobileNoForm.patchValue(results);
         console.log(results);
      })
       
   }
  
   deleteMobileNo(id)
   {
      this.mobileNoService.deleteMobileNo(id).subscribe(results =>{
         console.log(results);
      })
   }


    
}