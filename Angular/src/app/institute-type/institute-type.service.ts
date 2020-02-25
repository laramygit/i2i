import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InstituteType } from './institute-type';

@Injectable()
export class InstituteTypeService {

   private url="http://localhost:2222";


   constructor(private http: HttpClient){}


     /* first Service method */
     saveInstitute(institute){
       return this.http.post(this.url + "/saveInstitute", institute);
     }
 
     /* Second Service method */
     readInstitutes(){
       return this.http.get<InstituteType[]>(this.url + "/readInstitutes");
     }
 
     /* Third Service method */
     readInstitute(id){
         return this.http.get<InstituteType>(this.url + "/readInstitute/" + id); 
     }
 
     /* Fourth Service method */
     deleteInstitute(id){
         return this.http.delete(this.url + "/deleteInstitute/" + id); 
     }
}