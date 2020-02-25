import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { SkillService } from './skill.service';

@Component({
  selector: 'skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit
 {
      skillForm;
      skills = [];


  constructor(private formBuilder: FormBuilder,
              private service: SkillService) 
  { 

  }
 

  ngOnInit() 
  {
    this.readSkills();

      this.skillForm =this.formBuilder.group({
          id: new FormControl(''),
          name: new FormControl('',Validators.required),
          skillDesc: new FormControl('',Validators.required)

      })
      
  }
  get name() 
  {
      return this.skillForm.get('name');
  }
  get skillDesc()
  {
      return this.skillForm.get('skillDesc');
  }
 
  saveSkill()
  {
      if(this.skillForm.invalid)
      {
         this.name.touched = true;
         this.skillDesc.touched = true;
      }
      this.service.saveSkill(this.skillForm.value).subscribe(
        results=>{
          console.log(results);
          this.skillForm.reset();
          this.readSkills();
        }
      )

  }
  readSkills()
  {
      this.service.readSkills().subscribe(
        results=>{
          this.skills = results;
          console.log(results);
        }
      )

  }
  readSkill(id)
  {
     this.service.readSkill(id).subscribe(
       results=>{
         this.skillForm.setValue(results);
         console.log(results);
       }
     )
  }
  deleteSkill(id)
  {
    this.service.deleteSkill(id).subscribe(
      results=>{
        console.log(results);
        this.readSkills();
      }
    )

  }

}
