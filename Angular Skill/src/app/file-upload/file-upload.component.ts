import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl } from '@angular/forms';

const URL='http://localhost:1234/saveJobSeeker';

@Component({
  selector: 'app-file-upload',
  template: `
    <form [formGroup]="myForm" (ngSubmit)="save()">
    First Name: <input type="text" formControlName="firstName" /><br/>
    Last Name: <input type="text" formControlName="lastName" /><br/>
    Profile Pic:
    <input type="file" name="profilePic" ng2FileSelect [uploader]="uploader" />
    <button (click)="saveProfilePic($event)">Upload </button><br/>
    <input type="submit" value="submit" />
    </form>
  `,
  styles: []
})
export class FileUploadComponent implements OnInit {
  myForm;
  public uploader:FileUploader =
  new FileUploader({url:URL,itemAlias:'profilePic'});
  constructor(private http:HttpClient,private fb:FormBuilder) { }

  ngOnInit() {
      this.myForm =this.fb.group({
        id: new FormControl(),
        firstName: new FormControl(),
        lastName: new FormControl(),
      });
      this.uploader.onAfterAddingFile =(file) =>{
        file.withCredentials =false;
      };
      this.uploader.onCompleteItem =(item:any,response:any,
        status:any,headers:any) =>{
        console.log('file :Uploaded',item,status,response);
        this.myForm.get("id").value =response;//Respose Added to form control so Unique profile Pic for Une User
      };
    
  }
  saveProfilePic($event){
    this.uploader.uploadAll();
    $event.preventDefault();
  
  }
  
  
  save(){
    this.http.post('http://localhost:1234/saveJobSeeker',this.myForm.value).subscribe(
      r1=>{
        console.log(r1);
      },
      //For Error Information We have to declare
      e1 =>{
        console.log(e1);
      }
    )
  }

}
