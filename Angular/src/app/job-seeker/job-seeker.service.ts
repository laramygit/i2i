import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JobSeeker } from './jobseeker';

@Injectable()
export class JobSeekerService{

    private url="http://localhost:2222";

    constructor(private http:HttpClient){

    }

    /* first Service method */
    saveJobSeeker(jobSeeker){
      return this.http.post(this.url + "/saveJobSeeker",jobSeeker);
    }

    /* Second Service method */
    readJobSeekers(){
      return this.http.get<JobSeeker[]>(this.url + "/readJobSeekers");
    }

    /* Third Service method */
    readJobSeeker(id){
        return this.http.get<JobSeeker>(this.url + "/readJobSeeker/" + id); 
    }

    /* Fourth Service method */
    deleteJobSeeker(id){
        return this.http.delete(this.url + "/deleteJobSeeker/" + id); 
    }

}