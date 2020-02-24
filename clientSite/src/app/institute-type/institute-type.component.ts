import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { InstituteTypeService } from './institute-type.service';


@Component({
  selector: 'institute-type',
  templateUrl: './institute-type.component.html',
  styleUrls: ['./institute-type.component.css']
})
export class InstituteTypeComponent implements OnInit {
  instituteTypeForm;
  InstituteTypes = [];
 
  constructor(private formBuilder: FormBuilder, private service: InstituteTypeService)
   { 
    this.instituteTypeForm =formBuilder.group({
      id: new FormControl(''),
      name: new FormControl('', Validators.required),
      instituteTypeDesc: new FormControl('', Validators.required),
      })

  }

  ngOnInit() {
    this.readInstituteTypes();
  }
  get name(){
    return this.instituteTypeForm.get('name');
 }
 get instituteTypeDesc(){
   return this.instituteTypeForm.get('instituteTypeDesc');
 }

 saveInstituteType(){
   if(this.instituteTypeForm.invalid){
     this.name.touched = true;
     this.instituteTypeDesc.touched = true;
     return false;
   }
   this.service.saveInstituteType(this.instituteTypeForm.value).subscribe(
     results =>{
       console.log(results);
       this.instituteTypeForm.reset();
       this.readInstituteTypes();
     }
   )
 }
 readInstituteTypes(){
   this.service.readInstituteTypes().subscribe(
     results =>{
                 this.InstituteTypes = results;
                 console.log(results);
             } )
           }
 deleteInstituteType(id)
 {
              this.service.deleteInstituteType(id).subscribe(
                results =>{
                  console.log(results);
                  this.readInstituteTypes();
                }
              )
           }

   readInstituteType(id){
            this.service.readInstituteType(id).subscribe(
              results =>{
                this.instituteTypeForm.setValue(results);
                console.log(results);
              }
            )
           }   

}
