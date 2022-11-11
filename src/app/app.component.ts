import { Component } from '@angular/core';
import {AuthentificationService} from "./service/authentification/authentification.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'OrderBoardGames';
  logged = false;

  constructor(public authenticationService: AuthentificationService) {
  }


}
