import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Skill } from './skill';

@Injectable()
export class SkillService {
    url = "http://localhost:7074";
    constructor(private http: HttpClient)
    {
    }   
    saveSkill(skill: Skill)
    {
        return this.http.post(this.url + "/saveSkill", skill);
    } 
    readSkills()
    {
        return this.http.get<Skill[]>(this.url + "/readSkills");
    }    
    readSkill(id)
    {
        return this.http.get<Skill>(this.url + "/readSkill/" + id);
    }    
    deleteSkill(id)
    {
        return this.http.delete(this.url + "/deleteSkill/" + id);
    }
  
    

}