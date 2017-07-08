import { Component, Input, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero.service'

@Component({
  selector: 'app-hero-create',
  templateUrl: './hero-create.component.html',
  styleUrls: ['./hero-create.component.scss']
})
export class HeroCreateComponent implements OnInit {
  feedback:string;

  constructor(private heroService:HeroService) { }

  ngOnInit() {

  }

  create(heroName:string): void {
    this.heroService.createHero(heroName).then((response) => {
      this.feedback = response ? `${heroName} 'created'` : `${heroName} 'exists'`
    });
  }

}
