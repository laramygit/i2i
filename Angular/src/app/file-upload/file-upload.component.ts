import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl } from '@angular/forms';





@Component({
  selector: 'app-file-upload',
  template: `
    
     <form [formGroup]="myForm" (ngSubmit)="save()">
     
     First Name: <input type="text" formControleName="firstName" /> <br/>

     Last Name: <input type="text" formControleName="lastName" /> <br/>

     Profile Pic: <input type="file" name="profilePic" ng2FileSelect [uploader]="uploader" />

     <button (click)="saveProfilePic($event)">UPLOAD</button> <br/>

     <input type="submit" value="submit" />

     </form>
  `,
  styles: []
})
export class FileUploadComponent implements OnInit {
  
  private URL = "http://localhost:8080/saveProfilePic";
  myForm;

  public uploader : FileUploader = new FileUploader({ url: this.URL, itemAlias: 'profilePic'})

  constructor(private http : HttpClient, private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      id: new FormControl(),
      firstName: new FormControl(),
      lastName: new FormControl()
    });

    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false};
    this.uploader.onCompleteItem = (item: any, response : any, status: any, headers: any) =>{
      console.log('File : uploaded:', item, status, response);
      this.myForm.get('id').value = response;
    }
  }



  saveProfilePic($event){
    this.uploader.uploadAll();
    $event.preventDefault();
  }

  save(){
    this.http.post('http://localhost:8080/saveJobSeeker', this.myForm.value).subscribe(results =>{
       console.log(results);
    },
     e1 =>{  // used for more information to understand whats going on
       console.log(e1)
     });
  }

}
