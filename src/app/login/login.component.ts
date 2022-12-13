import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthentificationService} from "../service/authentification/authentification.service";
import {SignInData} from "../model/sign-in-data";
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthentificationService],
})
export class LoginComponent  {
  isFormInvalid = false
  user = ''


  onSubmit(signInForm: NgForm) {
    this.isFormInvalid = !signInForm.valid;
    console.log(signInForm.value)
    const signInData = new SignInData(signInForm.value.username, signInForm.value.password);
    if (this.authenticationService.authenticate(signInData)) {
      this.router.navigate([""])
    }
    this.authenticationService.authenticate(signInData)
  }

  changeUser() {
    this.cookie.set('user', 'bolek ')
    window.location.reload()
  }


  constructor(private authenticationService : AuthentificationService, private router: Router, private cookie: CookieService) {}


}
