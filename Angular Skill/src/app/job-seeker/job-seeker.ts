
import { JobType } from '../job-type/job-type';
import { Location } from '../location/location';
import { Skill } from '../skill/skill';

export class JobSeeker {

    id;
    firstName;
    lastName;
    dob;
    gender;
    isMarried;
    jobType: JobType;
    profilePicUrl;
    aadharNo;
    panNo;
    currentLocation: Location;
    yearsOfExp;
    profileSummary;
    email;
    currentPassword;
    locations: Location[];
    skills: Skill[];

}