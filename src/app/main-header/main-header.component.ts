import {Component, Input, OnInit, ViewChild} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { LoginComponent } from '../login/login.component';
import {AuthentificationService} from "../service/authentification/authentification.service";

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
  providers: [LoginComponent, AuthentificationService],
})
export class MainHeaderComponent implements OnInit {
  opened = false
  logged = false
  user = this.authenticationService.user


  constructor(private login: LoginComponent, private authenticationService: AuthentificationService) {
  }

  openMenu(): void {
    this.opened = !this.opened
    console.log(this.opened)
  }

  logout() {
    this.authenticationService.logout()
  }



  ngOnInit(): void {
  }
}
