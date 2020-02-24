import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JobSeekerEducation } from './jobseeker-education';

@Injectable()
export class JobSeekerEducationService
{
    private url = "http://localhost:7090";
    constructor(private http: HttpClient)
    {

    }

    saveJobSeekerEducation(jobSeekerEducation: JobSeekerEducation)
    {
        return this.http.post(this.url + "/saveJobSeekerEducation" , jobSeekerEducation);
    }

    readJobSeekerEducations()
    {
        return this.http.get<JobSeekerEducation[]>(this.url + "/readJobSeekerEducations");
    }

    deleteJobSeekerEducation(id)
    {
        return this.http.delete(this.url + "/deleteJobSeekerEducation/" + id);
    }

    readJobSeekerEducation(id)
    {
        return this.http.get<JobSeekerEducation>(this.url + "/readJobSeekerEducation/" + id);
    }
    

}