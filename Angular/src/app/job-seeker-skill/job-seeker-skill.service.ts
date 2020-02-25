import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JobSeekerSkill } from './job-seeker-skill';

@Injectable()
export class JobSeekerSkillService{

    private url="http://localhost:2222";
 
    constructor(private http: HttpClient){}

     /* first Service method */
     saveSkill(skill){
        return this.http.post(this.url + "/saveSkill", skill);
      }
  
      /* Second Service method */
      readSkills(){
        return this.http.get<JobSeekerSkill[]>(this.url + "/readSkills");
      }
  
      /* Third Service method */
      readSkill(id){
          return this.http.get<JobSeekerSkill>(this.url + "/readSkill/" + id); 
      }
  
      /* Fourth Service method */
      deleteSkill(id){
          return this.http.delete(this.url + "/deleteSkill/" + id); 
      }

}