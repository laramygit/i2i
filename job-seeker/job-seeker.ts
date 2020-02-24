
import { JobType } from '../job-type/job-type';
import { Location } from '../location/location';

import { Education } from '../education/education';
import { Medium } from '../medium/medium';
import { EducationalBoard } from '../educational-board/educational-board';

export class JobSeeker 
{
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
	 education: Education;
	 medium: Medium;
	 educationalBoard: EducationalBoard;
     yearsOfExp;
	 profileSummary;
	 email;
	 currentPassword;
	
}
