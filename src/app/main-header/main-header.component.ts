import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDrawer} from "@angular/material/sidenav";

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {
  user: string | undefined
  opened: boolean | undefined
  @ViewChild('drawer') drawer: MatDrawer | undefined

  constructor() { }

  openMenu(): void {
    this.opened = !this.drawer?.opened
    console.log(this.drawer?.opened)
  }

  ngOnInit(): void {
    this.user = 'Użytkownik testowy'
  }

}
