import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../models/hero';
import { HeroService } from '../../services/hero.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-hero-delete',
  templateUrl: './hero-delete.component.html',
  styleUrls: ['./hero-delete.component.scss']
})
export class HeroDeleteComponent implements OnInit {

  @Input() hero:Hero;

  constructor(
    private heroService:HeroService,
    private router:Router
    ) { }

  ngOnInit() {
  }

  delete(): void {
    this.heroService.deleteHero(this.hero).then(() => {
      this.router.navigate(['/heroes']);
    });
  }
}
