import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../../classes/hero'
import { HeroService } from '../../services/hero.service'

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private router:Router,
    private heroService:HeroService
    ) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect(hero:Hero): void {
    this.selectedHero = hero;
  }

  goToDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
