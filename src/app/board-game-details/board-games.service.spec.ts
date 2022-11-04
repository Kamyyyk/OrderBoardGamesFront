import { TestBed } from '@angular/core/testing';

import { BoardGameDetailsService } from './board-game-details.service';

describe('BoardGamesService', () => {
  let service: BoardGameDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoardGameDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
