import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';
import { AppComponent } from './app.component';
import { StateComponent } from './state/state.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';
import {ReactiveFormsModule} from '@angular/forms';
import { StateService } from './state/state.service';
import { DistrictComponent } from './district/district.component';
import { DistrictService } from './district/district.service';
import { LocationComponent } from './location/location.component';
import { LocationService } from './location/location.service';
import { JobTypeComponent } from './job-type/job-type.component';
import { JobTypeService } from './job-type/job-type.service';
import { JobSeekerComponent } from './job-seeker/job-seeker.component';
import { JobSeekerService } from './job-seeker/job-seeker.service';
import { JobSeekerExperienceComponent } from './job-seeker-experience/job-seeker-experience.component';
import { InstituteTypeComponent } from './institute-type/institute-type.component';
import { EducationBoardComponent } from './education-board/education-board.component';
import { JobSeekerExperienceService } from './job-seeker-experience/job-seeker-experience.service';
import { InstituteTypeService } from './institute-type/institute-type.service';
import { EducationBoardService } from './education-board/education-board.service';
import { JobSeekerSkillComponent } from './job-seeker-skill/job-seeker-skill.component';
import { JobSeekerSkillService } from './job-seeker-skill/job-seeker-skill.service';
import { FileSelectDirective }  from 'ng2-file-upload';
import { FileUploadComponent } from './file-upload/file-upload.component';



@NgModule({
  declarations: [
    AppComponent,
    StateComponent,
    DistrictComponent,
    LocationComponent,
    JobTypeComponent,
    JobSeekerComponent,
    JobSeekerExperienceComponent,
    InstituteTypeComponent,
    EducationBoardComponent,
    JobSeekerSkillComponent,
    FileSelectDirective,// Used for fileUpload
    FileUploadComponent 
  
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [StateService,
    DistrictService,
    LocationService,
    JobTypeService,
    JobSeekerService,
    JobSeekerExperienceService,
     InstituteTypeService,
     EducationBoardService, 
     DatePipe, JobSeekerSkillService],
  bootstrap: [AppComponent]
})
export class AppModule { }
