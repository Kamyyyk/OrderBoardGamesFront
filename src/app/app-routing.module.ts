import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import {BoardGameDetailsComponent} from "./board-game-details/board-game-details.component";
import {BoardGamesTableComponent} from "./board-games-table/board-games-table.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/menu',
    pathMatch: "full",
  },
  {
    path: 'menu',
    component: MainMenuComponent,
  },
  {
    path: 'heroes',
    component: HeroesComponent,
  },
  {
    path: 'messages',
    component: MessagesComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'boardGames',
    component: BoardGamesTableComponent,
  },
  {
    path: 'boardGameDetails/:id',
    component: BoardGameDetailsComponent,
  }

];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
