import { Injectable } from '@angular/core';
import { Hero } from '../../heroes/hero';
import { HEROES } from '../../mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from '../message/message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES)
    this.messageService.add('chuj dupa')
    return heroes;
  }

  constructor(private messageService: MessageService) {}
}
