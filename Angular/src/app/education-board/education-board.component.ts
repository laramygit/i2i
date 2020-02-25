import { Component, OnInit } from '@angular/core';
import { EducationBoardService } from './education-board.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-education-board',
  templateUrl: './education-board.component.html',
  styleUrls: ['./education-board.component.css']
})
export class EducationBoardComponent implements OnInit {

  educationBoards = [];
  educationBoardForm;

  constructor(private educationBoardService: EducationBoardService,
              private formBuilder: FormBuilder) {

                this.educationBoardForm =formBuilder.group({
                  educationBoardId: new FormControl(''),
                  eductionBoardName: new FormControl('', Validators.required)
                  });
               }



    get educationBoardId(){
      return this.educationBoardForm.get('educationBoardId');
    }
    get eductionBoardName(){
      return this.educationBoardForm.get('eductionBoardName');
    }


  ngOnInit() {
    this.readBoards();
  }



  /* IST SERVICE METHOD CALLING */
  saveBoard(){
    if(this.educationBoardForm.invalid){
     this.eductionBoardName.toched = true;
     return ;
   } 
   
  // alert(JSON.stringify(this.jobSeekerForm.value)); used for testing field.
  this.educationBoardService.saveBoard(this.educationBoardForm.value).subscribe(results =>{
    console.log(results);
  });
 }

/* 2ND SERVICE METHOD CALLING */
readBoards(){
  this.educationBoardService.readBoards().subscribe(results =>{
    this.educationBoards = results;
    console.log(results);
  });
 }


 /* 3RD SERVICE METHOD CALLING */
 readBoard(id){
   this.educationBoardService.readBoard(id).subscribe(results =>{
     this.educationBoardForm.patchValue(results);
   });

 }

/* 4TH SERVICE METHOD CALLING */
deleteBoard(id){
   this.educationBoardService.deleteBoard(id).subscribe(results =>{
     console.log(results);
     this.readBoards();
   });
 }


}
