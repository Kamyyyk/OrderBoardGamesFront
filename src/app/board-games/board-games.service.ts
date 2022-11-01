import { Injectable } from '@angular/core';
import {BoardGame} from "./board-game";
import {BOARD_GAMES_DATA} from "./board-games-list";

@Injectable({
  providedIn: 'root'
})
export class BoardGamesService {
  getBoardGames(): BoardGame[] {
    return BOARD_GAMES_DATA
  }

  constructor() { }
}
