import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {
  user: string | undefined

  constructor() { }

  ngOnInit(): void {
    this.user = 'Użytkownik testowy'
  }

}
