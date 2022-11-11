import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
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
    canActivate: [AuthGuard],
  },
  {
    path: 'messages',
    component: MessagesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'boardGames',
    component: BoardGamesTableComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'boardGames/boardGameDetails/:id',
    component: BoardGameDetailsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'contact',
    component: ContactComponent,
    canActivate: [AuthGuard],
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
