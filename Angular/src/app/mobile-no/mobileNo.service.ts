import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MobileNo } from './mobileNo';



@Injectable()
export class MobileNoService
{
    url = "http://localhost:2222";

    constructor(private http: HttpClient)
    {

    }
    readMobileNos()
    {
        return this.http.get<MobileNo[]>(this.url + "/readMobileNos");
    }
    readMobileNo(id)
    {
        return this.http.get<MobileNo>(this.url + "/readMobileNo/" + id);
    }
    saveMobileNo(mobileNo)
    {
        return this.http.post(this.url + "/saveMobileNo", mobileNo);
    }
    deleteMobileNo(id)
    {
        return this.http.delete(this.url + "/deleteMobileNo/" + id);
    }

    // readMobileNosInOneState(stateId)
    // {
    //     return this.http.get<MobileNo[]>(this.url + "/readMobileNoInOneState/" + stateId);
    // }
    
}