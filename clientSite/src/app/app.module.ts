import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
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
import { InstituteTypeComponent } from './institute-type/institute-type.component';
import { InstituteTypeService } from './institute-type/institute-type.service';
import { DatePipe } from '@angular/common';
import { StdAddComponent } from './std-add/std-add.component';
import { FileSelectDirective } from 'ng2-file-upload';
import { FileUploadComponent } from './file-upload/file-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    StateComponent,
    DistrictComponent,
    LocationComponent,
    JobTypeComponent,
    JobSeekerComponent,
    InstituteTypeComponent,
   StdAddComponent,
   FileSelectDirective,
    FileUploadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    
  ],
  providers: [StateService,DistrictService,LocationService,JobTypeService,JobSeekerService,InstituteTypeService,DatePipe,FileSelectDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
