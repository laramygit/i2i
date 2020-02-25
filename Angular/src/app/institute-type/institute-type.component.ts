import { Component, OnInit } from '@angular/core';
import { InstituteTypeService } from './institute-type.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-institute-type',
  templateUrl: './institute-type.component.html',
  styleUrls: ['./institute-type.component.css']
})
export class InstituteTypeComponent implements OnInit {

  instituteTypes = [];
  instituteTypeForm;

  constructor(private instituteTypeService: InstituteTypeService,
             private formBuilder: FormBuilder) {

              this.instituteTypeForm =formBuilder.group({
                instituteId: new FormControl(''),
                instituteName: new FormControl('', Validators.required),
                instituteDesc: new FormControl('', Validators.required),
                });

   }

  get instituteId(){
    return this.instituteTypeForm.get('instituteId');
  }

  get instituteName(){
    return this.instituteTypeForm.get('instituteName');
  }

  get instituteDesc(){
    return this.instituteTypeForm.get('instituteDesc');
  }

  ngOnInit() {
    
    this.readInstitutes();
  }

  


  /* IST SERVICE METHOD CALLING */
  saveInstitute(){
    if(this.instituteTypeForm.invalid){
     this.instituteName.toched = true;
     this.instituteDesc.toched = true;
     return  ;
   } 
   
  // alert(JSON.stringify(this.jobSeekerForm.value)); used for testing field.
  this.instituteTypeService.saveInstitute(this.instituteTypeForm.value).subscribe(results =>{
    console.log(results);
  });
 }

/* 2ND SERVICE METHOD CALLING */
readInstitutes(){
  this.instituteTypeService.readInstitutes().subscribe(results =>{
    this.instituteTypes = results;
    console.log(results);
  });
 }


 /* 3RD SERVICE METHOD CALLING */
 readInstitute(id){
   this.instituteTypeService.readInstitute(id).subscribe(results =>{
     this.instituteTypeForm.patchValue(results);
   });

 }

/* 4TH SERVICE METHOD CALLING */
deleteInstitute(id){
   this.instituteTypeService.deleteInstitute(id).subscribe(results =>{
     console.log(results);
     this.readInstitutes();
   });
 }

}
