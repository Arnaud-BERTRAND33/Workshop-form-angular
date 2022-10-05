import { Component, OnInit } from '@angular/core';
import { User } from "../models/User";

@Component({
  selector: 'app-login-form-component',
  templateUrl: './login-form-component.component.html',
  styleUrls: ['./login-form-component.component.css']
})
export class LoginFormComponentComponent implements OnInit {

  user: User = new User("","");

  constructor() { }

  onSubmit(): void {


  }

  ngOnInit(): void {
  }

}
