import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../service/notification/notification.service';
import { loginForm } from './login-form';
import {NgForm} from "@angular/forms";
import {AuthentificationService} from "../service/authentification/authentification.service";
import {SignInData} from "../model/sign-in-data";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthentificationService],
})
export class LoginComponent implements OnInit {
  isFormInvalid = false



  onSubmit(signInForm: NgForm) {
    this.isFormInvalid = !signInForm.valid;
    console.log(signInForm.value)
    const signInData = new SignInData(signInForm.value.username, signInForm.value.password);
    this.authenticationService.authenticate(signInData)
  }

  constructor(private authenticationService : AuthentificationService) {}

  ngOnInit(): void {}
}
