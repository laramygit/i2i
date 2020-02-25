import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export class Student{
  id;
firstName;
  lastName;
 gender;
 address:{
   id;
   houseNo;
  streetName;
   city;
 state;
 }
}
export class AddressDto{
  id;
  houseNo;
 streetName;
  city;
state;
studentId;
}
export class Address{
 id;
 houseNo;
streetName;
 city;
state;

}

@Component({
  selector: 'app-std-add',
  template: `
    <p>
      std-add works!
    </p>
  `,
  styles: []
})
export class StdAddComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get<Student>('http://localhost:9009/readStudent/1').subscribe(
      r1 =>{
        console.log(r1);
      }
    )
    this.http.get<Address>('http://localhost:9009/readAddress/1').subscribe(
      r1 =>{
        console.log(r1);
      }
    )
    this.http.get<AddressDto>('http://localhost:9009/readAddressOnly/1').subscribe(
      r1 =>{
        console.log(r1);
      }
    )
  }

}
