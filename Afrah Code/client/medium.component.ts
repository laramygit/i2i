import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MediumService } from './medium.service';

@Component({
  selector: 'medium',
  templateUrl: './medium.component.html',
  styleUrls: ['./medium.component.css']
})

export class MediumComponent implements OnInit {
 mediums= [];
 mediumForm;

 constructor(private formBuilder: FormBuilder, private service: MediumService) 
 {

  }

 ngOnInit()
  {

   this.readMediums();

   this.mediumForm = this.formBuilder.group({
     id: new FormControl(''),
     name: new FormControl('', Validators.required),
     mediumDesc: new FormControl('', Validators.required)
   })
 }

 get name()
 {
   return this.mediumForm.get("name");
 }

 get mediumDesc()
 {
   return this.mediumForm.get("mediumDesc");
 }

 readMediums()
 {
     this.service.readMediums().subscribe(
      results => 
       {
         console.log(results);
         this.mediums = results;
       }
     );
 }

 readMedium(id)
 {
     this.service.readMedium(id).subscribe(
      results => 
      {
           this.mediumForm.setValue(results);
           console.log(results);
           
       }
     );
 }

 saveMedium()
 {
     if(this.mediumForm.invalid)
     {
       alert("Please fill the form");
       return false;
     }
     this.service.saveMedium(this.mediumForm.value).subscribe(
       results =>
       {
         console.log(results); 
         this.mediumForm.reset();
         this.readMediums();         
       }
     );
 }

 deleteMedium(id)
 {
     this.service.deleteMedium(id).subscribe(
       results =>
        {
         console.log(results);
         this.readMediums();
       }
     );
 }
}   