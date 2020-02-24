import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Email } from './email';
@Injectable()
export class EmailService
{
    private url = "http://localhost:7095";

    constructor(private http: HttpClient)
    {

    }

    saveEmail(email: Email)
    {
        return this.http.post(this.url + "/saveEmail", email);
    }

    readEmails()
    {
        return this.http.get<Email[]>(this.url + "/readEmails");
    }

    deleteEmail(id)
    {
        return this.http.delete(this.url + "/deleteEmail/" + id);
    }

    readEmail(id)
    {
        return this.http.get<Email>(this.url + "/readEmail/" + id);
    }
}