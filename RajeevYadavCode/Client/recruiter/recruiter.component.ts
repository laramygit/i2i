import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

class Recruiter
{
  id;
  nameOrg;
  educationBoards: EducationBoard[];
}

class EducationBoard
{
  id;
  name;
}

class InstituteType
{
  id;
  name;
}



@Component({
  selector: 'recruiter',
  template: `
  <h1> Recruiter Form </h1>
  <div *ngIf="recruiters.length !=0; else noRecruiters">
    <table border='1'>
        <tr>
            <th>id</th>
            <th>nameorg</th>
            <th>somedesc</th>
            <th>websiteurl</th>
            <th>landlineno</th>
            <th>Delete</th>
        </tr>
        <tr *ngFor="let recruiter of recruiters">
            <td>
                <a href="#" (click)="readAll(recruiter.id)">
                    {{ recruiter.id }}
                </a>
            </td>    
            <td>{{recruiter.nameOrg}}</td>
            <td>{{recruiter.someDesc}}</td>
            <td>{{recruiter.websiteUrl}}</td>
            <td>{{recruiter.landlineNo}}</td>
            
            <td>
                <a href="#" (click)="delete(recruiter.id)">
                    Delete {{ recruiter.name }}
                </a>
            </td>
        </tr>
    </table>
</div>


  <form [formGroup] = "recruiterForm" (ngSubmit)="saveRecruiter()">
  First Name: <input type="text" formControlName="nameOrg"/> <br/>
  
  EducationBoard:
  <label formArrayName="educationBoards" *ngFor="let e1 of recruiterForm.controls.educationBoards.controls; let i=index">
       <input type='checkbox' [formControlName]="i"/> {{educationBoards[i].name}} 
  </label> <br/>
  

  InstituteType:
  <label formArrayName="instituteTypes" *ngFor="let i1 of recruiterForm.controls.instituteTypes.controls; let i=index">
       <input type='checkbox' [formControlName]="i"/> {{instituteTypes[i].name}} 
  </label> <br/>
  
    
  <input type="button" value="SUBMIT"/>  
</form> 

  `,
  styles: []
})
export class RecruiterComponent implements OnInit {
  educationBoards = [];
  instituteTypes = [];
  recruiterForm: FormGroup;
  recruiters = [];
  recruiter;
  constructor(private formBuilder: FormBuilder, private http: HttpClient) 
  { 
    this.recruiterForm = formBuilder.group({
      id: new FormControl(),
      nameOrg: new FormControl(),
      educationBoards: new FormArray([]),
      instituteTypes: new FormArray([]),
      
    });
    this.readAll();
   
  }  

  

  ngOnInit() {
    this.http.get<EducationBoard[]>('http://localhost:5000/readEducationBoards').subscribe(
      results =>{
        this.educationBoards = results;
        this.populate();
      }
    );

    this.http.get<InstituteType[]>('http://localhost:5000/readInstituteTypes').subscribe(
      results =>{
        this.instituteTypes = results;
        this.populate();
      }
    );
  }

  populate()
  {
     for(let i = 0; i < this.educationBoards.length; i++)
    {
      (this.recruiterForm.get('educationBoards') as FormArray).push(new FormControl());
    }
    for(let i = 0; i < this.instituteTypes.length; i++)
    {
      (this.recruiterForm.get('instituteTypes') as FormArray).push(new FormControl());
    }
  }

  saveRecruiter()
  {
    var selectedEducationBoardIds = this.recruiterForm.value.educationBoards
    .map((v, i) => v ? this.educationBoards[i].id : null).filter(v => v !== null);
    var selectedEducationBoardIdsArray = selectedEducationBoardIds.toString().split(',');
    var educationBoardsArray = [];
    for(var i = 0; i < selectedEducationBoardIdsArray.length; i++)
    {
      educationBoardsArray.push({id: selectedEducationBoardIdsArray[i]})
    }
    this.recruiterForm.value.educationBoards = educationBoardsArray;
    var jsonStr = JSON.stringify(this.recruiterForm.value);
    var jsonObj = JSON.parse(jsonStr);

    var selectedInstituteTypeIds = this.recruiterForm.value.instituteTypes
    .map((v, i) => v ? this.instituteTypes[i].id : null).filter(v => v !== null);
    var selectedInstituteTypeIdsArray = selectedInstituteTypeIds.toString().split(',');
    var instituteTypesArray = [];
    for(var i = 0; i < selectedInstituteTypeIdsArray.length; i++)
    {
      instituteTypesArray.push({id: selectedInstituteTypeIdsArray[i]})
    }
    this.recruiterForm.value.instituteTypes = instituteTypesArray;
    var jsonStr = JSON.stringify(this.recruiterForm.value);
    var jsonObj = JSON.parse(jsonStr);
    {
    this.http.post('http://localhost:5000/saveRecruiter', jsonObj).subscribe(
      r1 =>
      {
        console.log(r1);   
        this.readAll();     
      }
    )
    console.log(this.recruiterForm);
    this.recruiterForm.reset();}
  }
  readAll()
  {
    this.http.get<Recruiter[]>('http://localhost:5000/readAll').subscribe(
      r1 =>
      {
        this.recruiters = r1;
      }
    )    
  }

  
  delete(id)
  {
    this.http.delete('http://localhost:5000/delete/' + id).subscribe(
      r1 =>
      {
        this.readAll();
      }
    )    
  }
 

  read(id)
  {
    this.http.get<Recruiter>('http://localhost:5000/read/' + id).subscribe(
      r1 =>
      {
        var jsonStr = JSON.stringify(r1);
        var jsonObj = JSON.parse(jsonStr);
        this.recruiterForm.get('id').setValue(jsonObj.id);
        this.recruiterForm.get('nameOrg').setValue(jsonObj.nameOrg);
       
        (this.recruiterForm.get('educationBoards') as FormArray).clear();
        var flag = false;
        for(let i = 0; i < this.educationBoards.length; i++)
        {
          flag = this.educationBoardAvailability(jsonObj.educationBoards, this.educationBoards[i].id);
          (this.recruiterForm.get('educationBoards') as FormArray).push(new FormControl(flag));
        }

        (this.recruiterForm.get('instituteTypes') as FormArray).clear();
        var flag = false;
        for(let i = 0; i < this.instituteTypes.length; i++)
        {
          flag = this.instituteTypeAvailability(jsonObj.instituteTypes, this.instituteTypes[i].id);
          (this.recruiterForm.get('instituteTypes') as FormArray).push(new FormControl(flag));
        }
      }
    )

  }

  educationBoardAvailability(educationBoards, id)
  {
    var booleanTest = false;
    for(var k = 0; k < educationBoards.length; k++)
    {
      if(educationBoards[k].id == id)
      {
        booleanTest = true;
        break;
      }
    }
    return booleanTest;
  }

  instituteTypeAvailability(instituteTypes, id)
  {
    var booleanTest = false;
    for(var k = 0; k < instituteTypes.length; k++)
    {
      if(instituteTypes[k].id == id)
      {
        booleanTest = true;
        break;
      }
    }
    return booleanTest;
  }

  refresh()
  {
    this.recruiterForm.reset();
  }

}
