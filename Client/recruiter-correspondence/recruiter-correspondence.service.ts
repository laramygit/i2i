import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecruiterCorrespondence } from './recruiter-correspondence';


@Injectable()
export class RecruiterCorrespondenceService {
   private url = "http://localhost:7090";
    constructor(private http: HttpClient){
    }  
    
    saveRecruiterCorrespondence(recruiterCorrespondence: RecruiterCorrespondence){
        return this.http.post(this.url + "/saveRecruiterCorrespondence", recruiterCorrespondence);
    }
    readRecruiterCorrespondences(){
        return this.http.get<RecruiterCorrespondence[]>(this.url + "/readRecruiterCorrespondences");
    }
    readRecruiterCorrespondence(id){
        return this.http.get<RecruiterCorrespondence>(this.url + "/readRecruiterCorrespondence/" + id);
    } 
    deleteRecruiterCorrespondence(id){
        return this.http.delete(this.url + "/deleteRecruiterCorrespondence/" + id);
    }
}

