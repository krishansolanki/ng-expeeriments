import { Injectable } from '@angular/core';
import { Hero } from '../classes/hero'
import { HEROES } from '../mocks/heroes.mock'

@Injectable()
export class HeroService {

  constructor() { }

  getHeroes(): Promise<Hero[]> {
    return new Promise(resolve => {
      setTimeout(()=> {
        resolve(HEROES)
      }, 0)
    })
  }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
  }

}
