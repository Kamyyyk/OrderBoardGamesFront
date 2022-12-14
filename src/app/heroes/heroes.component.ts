import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from '../service/hero/hero.service';
import {MessageService} from "../service/message/message.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroId(id: number) {
    return `/detail/${id}`
  }

  getHeroes() {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  constructor(private heroService: HeroService, private messageService: MessageService, private router: Router) {}

  ngOnInit(): void {
    this.getHeroes();
    console.log(this.router.url)
  }
}
