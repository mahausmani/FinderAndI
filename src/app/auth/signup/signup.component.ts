import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  fullName: string = ''; // provide default value or initialize in constructor
  email: string = ''; // provide default value or initialize in constructor
  password: string = ''; // provide default value or initialize in constructor
  onSubmit(): void {
    // Implement the onSubmit logic here
  }
  constructor() { }
}