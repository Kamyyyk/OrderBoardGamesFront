import { Component, OnInit } from '@angular/core';
import { BoardGameDetailsService } from '../board-game-details/board-game-details.service';
import { BoardGame } from '../board-game-details/board-game';
import {Router} from "@angular/router";

@Component({
  selector: 'app-board-game-details-table',
  templateUrl: './board-games-table.component.html',
  styleUrls: ['./board-games-table.component.scss'],
})
export class BoardGamesTableComponent implements OnInit {
  dataSource: BoardGame[] = [];
  displayedColumns: string[] = ['id', 'name', 'players', 'price'];

  getBoardGames(): void {
    this.dataSource = this.boardGamesService.getBoardGames()
  }

  getBoardGame(id: number) {
    return this.router.navigateByUrl(`./boardGameDetails/${id}`)
  }

  constructor(private boardGamesService: BoardGameDetailsService, private router: Router) { }

  ngOnInit(): void {
    this.getBoardGames();
    console.log(this.dataSource);
  }
}
