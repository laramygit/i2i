import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { JobTypeService } from './job-type.service';

@Component({
  selector: 'job-type',
  templateUrl: './job-type.component.html',
  styleUrls: ['./job-type.component.css']
})
export class JobTypeComponent implements OnInit {
  jobTypeForm;
  jobTypes = [];
  constructor(private formBuilder: FormBuilder, private service: JobTypeService) {
    this.jobTypeForm = formBuilder.group({
      id: new FormControl(''),
      name: new FormControl('', Validators.required),
      jobTypeDesc: new FormControl('', Validators.required)
    })
  }

  ngOnInit() {
    this.readJobTypes();
  }
  get name() {
    return this.jobTypeForm.get('name');
  }
  get jobTypeDesc() {
    return this.jobTypeForm.get('jobTypeDesc')
  }
  saveJobType() {
    if (this.jobTypeForm.invalid) {
      this.name.touched = true;
      this.jobTypeDesc.touched = true;
      return;
    }
    this.service.saveJobType(this.jobTypeForm.value).subscribe(
      results => {
        console.log(results);
        this.jobTypeForm.reset();
        this.readJobTypes();
      }
    )
  }
  readJobTypes() {
    this.service.readJobTypes().subscribe(
      results => {
        this.jobTypes = results;
        console.log(this.jobTypes);

      }
    )
  }
  deleteJobType(id)
  {
    this.service.deleteJobType(id).subscribe(
      results => {
        console.log(results);
        this.readJobTypes();
      }
    )
  }
  readJobType(id)
  {
    this.service.readJobType(id).subscribe(
      results => {
        this.jobTypeForm.setValue(results);
        console.log(results);
      }
    )
  }

}
