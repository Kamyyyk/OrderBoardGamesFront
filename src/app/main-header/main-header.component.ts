import {Component, Input, OnChanges, OnInit} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { LoginComponent } from '../login/login.component';
import { AuthentificationService } from '../service/authentification/authentification.service';
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
  providers: [LoginComponent, AuthentificationService],
})
export class MainHeaderComponent  {
  opened = false;
  logged = false;
  user = this.cookie.get('user')


  constructor(
    private login: LoginComponent,
    private authenticationService: AuthentificationService,
    private cookie: CookieService
  ) {}

  openMenu(): void {
    this.opened = !this.opened;
    console.log(this.opened);
  }

  logout() {
    this.authenticationService.logout();
  }

  ngOnChange(): void {
    console.log(this.user)
  }
}
