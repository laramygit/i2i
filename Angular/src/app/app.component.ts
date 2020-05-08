import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  msg = "Hello to all";
  title = 'app1';
  
  method1(){
	  console.log("I am form method1")
  }
}
