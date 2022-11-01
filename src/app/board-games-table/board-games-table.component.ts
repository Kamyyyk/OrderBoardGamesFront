import { Component, OnInit } from '@angular/core';
import {BoardGamesService} from "../board-games/board-games.service";
import {BoardGame} from "../board-games/board-game";

const BOARD_GAMES_DATA: BoardGame[] = [
  {
    id: 1,
    name: 'Tajniacy',
    players: 4,
    price: 50,
  },
  {
    id: 2,
    name: '7 Cudów',
    players: 6,
    price: 100,
  },
  {
    id: 3,
    name: 'Posiadłość szaleństwa',
    players: 4,
    price: 300,
  },
  {
    id: 4,
    name: 'Tajniacy',
    players: 4,
    price: 70,
  },
  {
    id: 5,
    name: 'Tajniacy',
    players: 4,
    price: 80,
  },
];

@Component({
  selector: 'app-board-games-table',
  templateUrl: './board-games-table.component.html',
  styleUrls: ['./board-games-table.component.scss']
})
export class BoardGamesTableComponent implements OnInit {

  // dataSource: BoardGame[] = [];
  dataSource = BOARD_GAMES_DATA
  displayedColumns: string[] = ['id', 'name', 'players', 'price']

  getBoardGames(): void {
    this.dataSource = this.boardGamesService.getBoardGames()
  }


  constructor(private boardGamesService: BoardGamesService) { }

  ngOnInit(): void {
    // this.getBoardGames()
    console.log(this.dataSource)
  }

}
