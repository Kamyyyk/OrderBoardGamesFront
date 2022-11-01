import { Component, OnInit } from '@angular/core';
import { BoardGamesService } from '../board-games/board-games.service';
import { BoardGame } from '../board-games/board-game';

@Component({
  selector: 'app-board-games-table',
  templateUrl: './board-games-table.component.html',
  styleUrls: ['./board-games-table.component.scss'],
})
export class BoardGamesTableComponent implements OnInit {
  dataSource: BoardGame[] = [];
  displayedColumns: string[] = ['id', 'name', 'players', 'price'];

  getBoardGames(): void {
    this.dataSource = this.boardGamesService.getBoardGames()
  }

  constructor(private boardGamesService: BoardGamesService) { }

  ngOnInit(): void {
    this.getBoardGames();
    console.log(this.dataSource);
  }
}
