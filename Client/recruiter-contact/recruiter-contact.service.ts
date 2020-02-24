import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecruiterContact } from './recruiter-contact';

@Injectable()
export class RecruiterContactService {
   private url = "http://localhost:7090";
    constructor(private http: HttpClient){
    }      
    saveRecruiterContact(recruiterContact: RecruiterContact){
        return this.http.post(this.url + "/saveRecruiterContact", recruiterContact);
    }
    readRecruiterContacts(){
        return this.http.get<RecruiterContact[]>(this.url + "/readRecruiterContacts");
    }
    
    readRecruiterContact(id){
        return this.http.get<RecruiterContact>(this.url + "/readRecruiterContact/" + id);
    } 
    deleteRecruiterContact(id){
        return this.http.delete(this.url + "/deleteRecruiterContact/" + id);
    }
}

