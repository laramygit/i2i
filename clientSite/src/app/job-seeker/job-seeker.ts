import { JobType } from '../job-type/job-type';
import {Location} from '../location/location';

export class JobSeeker
{
    Id;
	firstName;
	 lastName;
	 dob;
	 gender; // M for Male F for Female
	 isMarried; //true for married & false for un-married
	 jobType;
	profilePicUrl;
	 aadharNo;
	 panNo;
	 currentLocation: Location;
	 yearsOfExp;
	 profileSummary;
	 email;
	 currentPassword;
	
}