import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Medium } from './medium';


@Injectable()
export class MediumService
{
    url = "http://localhost:7088";
    constructor(private http: HttpClient)
    {

    }

    readMediums()
    {
        return this.http.get<Medium[]>(this.url + "/readMediums");
    }

    readMedium(id)
    {
        return this.http.get<Medium>(this.url + "/readMedium/" + id);
    }

    saveMedium(medium: Medium)
    {
        return this.http.post(this.url + "/saveMedium", medium);
    }

    deleteMedium(id)
    {
        return this.http.delete(this.url + "/deleteMedium/" + id);
    }

}