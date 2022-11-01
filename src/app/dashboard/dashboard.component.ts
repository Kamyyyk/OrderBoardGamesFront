import {Component, OnInit} from '@angular/core';
import { Hero } from '../heroes/hero';
import { HeroService } from '../hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  currentPath: string | undefined;
  opened: boolean | undefined;

  constructor(private heroService: HeroService, private router: Router) {}

  ngOnInit(): void {
    this.getHeroes();
    this.currentPath = this.router.url;
  }

  openMenu(): void {
    this.opened = !this.opened
  }

  getHeroes(): void {
    this.heroService
      .getHeroes()
      .subscribe((heroes) => (this.heroes = heroes.slice(1, 5)));
  }
}
