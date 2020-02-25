import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { DistrictService } from './district.service';
import { StateService } from '../state/state.service';
import { District } from './district';

@Component({
  selector: 'district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.css']
})
export class DistrictComponent implements OnInit {

  districts = [];
  states = [];
  districtForm;
  constructor(private formBuilder: FormBuilder, 
              private stateService: StateService,
              private districtService: DistrictService) { }

  ngOnInit() {
    this.districtForm = this.formBuilder.group({
      id: new FormControl(''),
      name: new FormControl('', Validators.required),
      districtDesc: new FormControl('', Validators.required),
      state: this.formBuilder.group({
        id: new FormControl()
      })
    });
    this.stateService.readStates().subscribe(
      results => {
        this.states = results;
      }
    );
    this.readDistricts()
  }

  get name()
  {
    return this.districtForm.get('name');
  }

  get districtDesc()
  {
    return this.districtForm.get('districtDesc');
  }
  get id()
  {
    return this.districtForm.get('state').get('id');
  }
  getCurrentStateIdValue()
  {
    //alert(this.districtForm.get("state").get("id").value);
    return JSON.stringify(this.districtForm.get("state").get("id").value);
  }

  readDistricts()
  {
      this.districtService.readDistricts().subscribe(
        results => {
          this.districts = results;
        }
      )
  }
  readDistrict(id)
  {
      this.districtService.readDistrict(id).subscribe(
        results =>{
          let jsonStr = JSON.stringify(results);
          let jsonObj = JSON.parse(jsonStr);
          this.districtForm.patchValue({
            id: jsonObj.id,
            name: jsonObj.name,
            districtDesc: jsonObj.districtDesc
          });
          this.districtForm.get('state').get('id').setValue(jsonObj.state.id);
          
        }
      )
  }
  saveDistrict()
  {
      let jsonStr = JSON.stringify(this.districtForm.value);
      let jsonObj = JSON.parse(jsonStr);
      this.districtService.saveDistrict(jsonObj).subscribe(
        results =>{
          console.log(results);  
          this.readDistricts();        
        }
      )
  }
  deleteDistrict(id)
  {
      this.districtService.deleteDistrict(id).subscribe(
        results =>{
          console.log(results); 
          this.readDistricts();         
        }
      );
  }
  getStateName(id)
  {
    let stateName;
    for(var i = 0; i < this.states.length; i++)
    {
      if(id == this.states[i].id)
      {
        stateName = this.states[i].name;
        break;
      }
    }
    return stateName;
  }
}
