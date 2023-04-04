import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  username: string = ''; // provide default value or initialize in constructor
  email: string = ''; // provide default value or initialize in constructor
  password: string = ''; // provide default value or initialize in constructor
  onSubmit(): void {
    // Implement the onSubmit logic here
  }
  constructor() { }
}
