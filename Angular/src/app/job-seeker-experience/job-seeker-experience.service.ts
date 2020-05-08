import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JobSeekerExperience } from './job-seeker-experience';

@Injectable()
export class JobSeekerExperienceService{
    
    private url="http://localhost:2222";
 
    constructor(private http: HttpClient){}

     /* first Service method */
     saveExperience(experience){
        return this.http.post(this.url + "/saveExperience", experience);
      }
  
      /* Second Service method */
      readExperiences(){
        return this.http.get<JobSeekerExperience[]>(this.url + "/readExperiences");
      }
  
      /* Third Service method */
      readExperience(id){
          return this.http.get<JobSeekerExperience>(this.url + "/readExperience/" + id); 
      }
  
      /* Fourth Service method */
      deleteExperience(id){
          return this.http.delete(this.url + "/deleteExperience/" + id); 
      }

}