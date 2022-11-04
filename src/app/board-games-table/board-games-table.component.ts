import { Component, OnInit } from '@angular/core';
import { BoardGameDetailsService } from '../board-game-details/board-game-details.service';
import { BoardGame } from '../board-game-details/board-game';
import { Router } from '@angular/router';

@Component({
  selector: 'app-board-game-details-table',
  templateUrl: './board-games-table.component.html',
  styleUrls: ['./board-games-table.component.scss'],
})
export class BoardGamesTableComponent implements OnInit {
  boardGames: BoardGame[] = [];
  displayedColumns: string[] = ['id', 'name', 'players', 'price'];
  boardGame: BoardGame | undefined;
  openEditModal: boolean | undefined;
  submitted: boolean | undefined;

  getBoardGames(): void {
    this.boardGames = this.boardGamesService.getBoardGames();
  }

  getBoardGame(id: number) {
    return this.router.navigateByUrl(`./boardGameDetails/${id}`);
  }

  editBoardGame(boardGame: BoardGame) {
    this.boardGame = { ...boardGame };
    this.submitted = false;
    this.openEditModal = true;
  }

  hideModal() {
    this.openEditModal = false;
  }

  constructor(
    private boardGamesService: BoardGameDetailsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getBoardGames();
    console.log(this.boardGames);
  }
}
