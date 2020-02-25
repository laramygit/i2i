import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Skill } from './skill';

@Injectable()
export class SkillService
{
    private url = "http://localhost:7097";
    constructor(private http: HttpClient)
    {

    }
    readSkills()
    {
        return this.http.get<Skill[]>(this.url + "/readSkills");
    }
    saveSkill(skill: Skill)
    {
        return this.http.post(this.url + "/saveSkill", skill);

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