import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { EducationBoardService } from './education-board.service';

@Component({
  selector: 'education-board',
  templateUrl: './education-board.component.html',
  styleUrls: ['./education-board.component.css']
})
export class EducationBoardComponent implements OnInit {

  educationBoardForm;
  educationBoards = [];
  constructor(private formBuilder: FormBuilder, private service: EducationBoardService) { 
    
  }

  ngOnInit() {
  this.readEducationBoards();
  
  this.educationBoardForm = this.formBuilder.group({
    id: new FormControl(''),
    name: new FormControl('', Validators.required),
    eduDesc: new FormControl('', Validators.required)
  })
  }
  get name()
  {
    return this.educationBoardForm.get('name');
  }
  get eduDesc()
  {
    return this.educationBoardForm.get('eduDesc');
  }

  saveEducationBoard()
  {
    if(this.educationBoardForm.invalid)
    {
      this.name.touched = true;
      this.eduDesc.touched = true;
      return
    }
    this.service.saveEducationBoard(this.educationBoardForm.value).subscribe(
      results=>{
        console.log(results);
        this.educationBoardForm.reset();
        this.readEducationBoards();
      }
    )
  }
  readEducationBoards()
  {
    this.service.readEducationBoards().subscribe(
      results=>{
        this.educationBoards = results;
        console.log(results);
      }
    )
  }
  deleteEducationBoard(id)
  {
    this.service.deleteEducationBoard(id).subscribe(
      results=>{
        console.log(results);
        this.readEducationBoards();
      }
    )
  }
  readEducationBoard(id)
  {
    this.service.readEducationBoard(id).subscribe(
      results=>{
        this.educationBoardForm.setValue(results);
        console.log(results);
      }
    )
  }
}
