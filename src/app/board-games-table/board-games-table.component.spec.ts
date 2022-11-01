import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardGamesTableComponent } from './board-games-table.component';

describe('BoardGamesTableComponent', () => {
  let component: BoardGamesTableComponent;
  let fixture: ComponentFixture<BoardGamesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardGamesTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardGamesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
