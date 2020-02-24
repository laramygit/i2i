import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { EmailService } from './email.service';
import { JobSeeker } from '../job-seeker/job-seeker';
import { JobSeekerService } from '../job-seeker/job-seeker.service';

@Component({
  selector: 'email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  emailForm;
  jobSeekers = [];
  emails = [];


  constructor(private formBuilder: FormBuilder, private service: EmailService,
              private jobSeekerService: JobSeekerService) 
        {
          this.emailForm = this.formBuilder.group({
            id: new FormControl(''),
            email: new FormControl('', Validators.required),
            verifiedStatus: new FormControl('', Validators.required),
            jobSeeker: this.formBuilder.group({
              id:new FormControl('', Validators.required)
            })
          })
         }

  ngOnInit() {

    this.readEmails();

    this.jobSeekerService.readJobSeekers().subscribe(
      results =>{
        this.jobSeekers =results;

      }
    );

   
  }
  get email()
  {
    return this.emailForm.get('email');
  }

  get verifiedStatus()
  {
    return this.emailForm.get('verifiedStatus');
  }
  get jobSeekerId()
  {
    return this.emailForm.get('jobSeeker').get('id');
  }
  saveEmail()
  {
    this.service.saveEmail(this.emailForm.value).subscribe(
      results =>{
        console.log(results);
        this.emailForm.reset();
        this.readEmails();
        
      }
    )
  }

  readEmails()
  {
    this.service.readEmails().subscribe(
      results =>{
        this.emails = results;
        console.log(this.emails);
      }
    )
  }

  deleteEmail(id)
  {
    this.service.deleteEmail(id).subscribe(
      results =>{
        console.log(results);
        this.readEmails();
      }
    )
  }

  readEmail(id)
  {
    this.service.readEmail(id).subscribe(
      results =>{
        
       this.emailForm.patchValue(results);
       
  }
    )
}

}
