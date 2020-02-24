import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { SkillService } from './skill.service';

@Component({
  selector: 'skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  skillForm;
  skills = [];
  constructor(private formBuilder: FormBuilder, private service: SkillService) { }
  ngOnInit() {
    this.readSkills();
    this.skillForm = this.formBuilder.group({
      id: new FormControl(''),
      name: new FormControl('', Validators.required)
    });
  }
  get name() {
    return this.skillForm.get("name");
  }
  readSkills() {
    this.service.readSkills().subscribe(
      r1 => {
        console.log(r1);
        this.skills = r1;
      }
    )
  }
  saveSkill() {
    if (this.skillForm.invalid) {
      return false;
    }
    this.service.saveSkill(this.skillForm.value).subscribe(
      results => {
        console.log(results);
        this.skillForm.reset();
        this.readSkills();
      }
    );
  }
  readSkill(id) {
    this.service.readSkill(id).subscribe(
      r1 => {
        this.skillForm.setValue(r1);
      }
    );
  }
  deleteSkill(id) {
    this.service.deleteSkill(id).subscribe(
      results => {
        console.log(results);
        this.readSkills();
      }
    );
  }


}
