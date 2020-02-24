import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl } from '@angular/forms';


const URL = 'http://localhost:6600/saveProfilePic';
@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
myForm;
public uploader: FileUploader= new FileUploader({ url: URL, itemAlias: 'profilePic'});
  constructor(private http: HttpClient, private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      id: new FormControl(),
      firstName: new FormControl(),
      lastName: new FormControl(),
    });
    this.uploader.onAfterAddingFile = (file) => {file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('FILE:uploaded:', item, status, response);
      //this.myForm.get("id").value = response;
      this.myForm.get("id").setValue(parseInt(response));
    };
  }
  saveProfilePic($event)
  {
    this.uploader.uploadAll();
    $event.preventDefault();
  }
  save()
  {
    this.http.post('http://localhost:6600/saveJobSeeker', this.myForm.value).subscribe(
      r1 => {
        console.log(r1);
      },
      e1 => {
        console.log(e1);
      }
    )
  }

}
