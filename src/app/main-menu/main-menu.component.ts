import {Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {MainHeaderComponent} from "../main-header/main-header.component";
import {LoginComponent} from "../login/login.component";
import {NotificationService} from "../service/notification/notification.service";

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
  providers: [MainHeaderComponent, LoginComponent]
})
export class MainMenuComponent implements AfterViewInit, OnInit{
  logged = false
  isLoginFailed = false
  errorMessage = ''


  constructor(private login: LoginComponent) {
  }

  ngAfterViewInit() {
    console.log(this.logged)
  }


  ngOnInit(): void {
  }

}
