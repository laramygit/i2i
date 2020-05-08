import { JobSeeker } from '../job-seeker/jobseeker';
import { InstituteType } from '../institute-type/institute-type';
import { EducationBoard } from '../education-board/education-board';

export class JobSeekerExperience{
    
	experienceId;
	duration;
	startDate;
	designation;
	jobSeeker: JobSeeker;
	instituteType: InstituteType;
	educationBoard: EducationBoard;
}