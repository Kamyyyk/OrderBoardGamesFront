import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { MessagesComponent } from './messages/messages.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import {BoardGameDetailsComponent} from "./board-game-details/board-game-details.component";
import {BoardGamesTableComponent} from "./board-games-table/board-games-table.component";
import {ContactComponent} from "./contact/contact.component";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./auth.guard";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/boardGames',
    pathMatch: "full",
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
    path: 'detail/:id',
    component: HeroDetailComponent,
  },
  {
    path: 'boardGames',
    component: BoardGamesTableComponent,
  },
  {
    path: 'boardGames/boardGameDetails/:id',
    component:BoardGameDetailsComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  }

];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
