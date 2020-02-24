import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StateComponent } from './state/state.component';
import { AppComponent } from './app.component';
import { StateService } from './state/state.service';
import { DistrictComponent } from './district/district.component';
import { DistrictService } from './district/district.service';
import { LocationComponent } from './location/location.component';
import { LocationService } from './location/location.service';
import { JobTypeComponent } from './job-type/job-type.component';
import { JobTypeService } from './job-type/job-type.service';
import { JobSeekerComponent } from './job-seeker/job-seeker.component';
import { JobSeekerService } from './job-seeker/job-seeker.service';
import { MobileNoComponent } from './mobile-no/mobile-no.component';
import { DatePipe } from '@angular/common';
import { MobileNoService } from './mobile-no/mobileNo.service';
import { StudentAddressComponent } from './student-address/student-address.component';

@NgModule({
  declarations: [
    AppComponent,
    StateComponent,
    DistrictComponent,
    LocationComponent,
    JobTypeComponent,
    JobSeekerComponent,
    MobileNoComponent,
    StudentAddressComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [StateService, 
              DistrictService,
              LocationService, 
              JobTypeService,
              DatePipe,
              JobSeekerService, MobileNoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
