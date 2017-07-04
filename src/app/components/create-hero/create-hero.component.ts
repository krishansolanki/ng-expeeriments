import { Component, Input, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero.service'

@Component({
  selector: 'app-create-hero',
  templateUrl: './create-hero.component.html',
  styleUrls: ['./create-hero.component.scss']
})
export class CreateHeroComponent implements OnInit {
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
