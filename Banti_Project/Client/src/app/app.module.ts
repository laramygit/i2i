import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StateComponent } from './state/state.component';
import { StateService } from './state/state.service';
import { DistrictComponent } from './district/district.component';
import { DistrictService } from './district/district.service';
import { LocationComponent } from './location/location.component';
import { LocationService } from './location/location.service';
import { JobTypeComponent } from './job-type/job-type.component';
import { JobTypeService } from './job-type/job-type.service';
import { JobSeekerComponent } from './job-seeker/job-seeker.component';
import { JobSeekerService } from './job-seeker/job-seeker.service';
import { DatePipe } from '@angular/common';
import { SkillComponent } from './skill/skill.component';
import { SkillService } from './skill/skill.service';
import {FileSelectDirective} from 'ng2-file-upload';
import { FileUploadComponent } from './file-upload/file-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    StateComponent,
    DistrictComponent,
    LocationComponent,
    JobTypeComponent,
    JobSeekerComponent,
    SkillComponent,
    FileSelectDirective,
    FileUploadComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [StateService, DistrictService, LocationService, JobTypeService, JobSeekerService, SkillService,
    DatePipe ],
  bootstrap: [AppComponent]
})
export class AppModule { }
