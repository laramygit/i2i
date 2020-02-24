import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


class Student{
  id;
  firstName;
  lastName;
  gender;
  education;
  address:{
    id;
    houseNo;
    streetName;
    city;
    state;
  }
}

//for entity
  class Address{
  id;
  firstName;
  lastName;
  gender;
  education;
  address:{
    id;
    firstName;
    lastName;
    gender;
    education;

  }

}


//for DTO
class AddressDTO
{
    id;
    houseNo;
    streetName;
    city;
    state;
    studentId;

}

@Component({
  selector: 'app-student-address',
  template: `
    <p>
      student-address works!
    </p>
  `,
  styles: []
})
export class StudentAddressComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Student>('http://localhost:7086/readStudent/1').subscribe(
      r1 =>{
        console.log(r1);
      }
    )

    this.http.get<Address>('http://localhost:7086/readAddress/1').subscribe(
      r1 =>{
        console.log(r1);
      }
    )

    this.http.get<AddressDTO>('http://localhost:7086/readAddressOnly/1').subscribe(
      r1 =>{
        console.log(r1);
      }
    )

  }

}
