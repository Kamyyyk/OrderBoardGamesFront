import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {
  user: string | undefined
  opened: boolean | undefined

  constructor() { }

  openMenu(): void {
    this.opened = !this.opened
  }

  ngOnInit(): void {
    this.user = 'Użytkownik testowy'
  }

}
