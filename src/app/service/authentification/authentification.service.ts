import { Injectable } from '@angular/core';
import {SignInData} from "../../model/sign-in-data";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  private readonly mockedUser = new SignInData("admin", "admin")
  isAuthenticated = false;
  user = ''

  constructor(private router: Router) { }

  authenticate(signInData: SignInData): boolean {
    console.log(this.checkCredentials(signInData))
    if (this.checkCredentials(signInData)) {
      this.isAuthenticated = true;
      this.user = signInData.getUserName()
      return true;
    } else {
      this.isAuthenticated = false;
      return false;
    }
  }
  private checkCredentials(signInData: SignInData): boolean {
    console.log(signInData)
    return this.checkUsername(signInData.getUserName()) && this.checkPassword(signInData.getPassword())
  }

  private checkUsername(username: string) : boolean {
    return username === this.mockedUser.getUserName()
  }

  private checkPassword(password: string): boolean {
    return password === this.mockedUser.getPassword()
  }

  logout() {
    this.isAuthenticated = false
    this.router.navigate(["/login"])
  }
}
