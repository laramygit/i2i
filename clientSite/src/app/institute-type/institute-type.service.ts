
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InstituteType } from './institute-type';



@Injectable() 
export class InstituteTypeService
{
    private url="http://localhost:3315"
    constructor(private http:HttpClient){
       
   }
   saveInstituteType(instituteType:InstituteType)
   {
    return this.http.post(this.url + "/saveInstituteType", instituteType);
    
    }     
    readInstituteTypes(){
        return this.http.get<InstituteType[]>(this.url + "/readInstituteTypes");
    }

    deleteInstituteType(id){
        return this.http.delete(this.url + "/deleteInstituteType/" +id);
    }
    readInstituteType(id){
        return this.http.get<InstituteType>(this.url +"/readInstituteType/" +id);
           }
}

