import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recruiter } from './recruiter';


@Injectable()
export class RecruiterService {
   private url = "http://localhost:7090";
    constructor(private http: HttpClient){
    }  
    
    saveRecruiter(recruiter: Recruiter){
        return this.http.post(this.url + "/saveRecruiter", recruiter);
    }
    readRecruiters(){
        return this.http.get<Recruiter[]>(this.url + "/readRecruiters");
    }
    readRecruiter(id){
        return this.http.get<Recruiter>(this.url + "/readRecruiter/" + id);
    } 
    deleteRecruiter(id){
        return this.http.delete(this.url + "/deleteRecruiter/" + id);
    }
}

