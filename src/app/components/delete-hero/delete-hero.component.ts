import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../classes/hero';
import { HeroService } from '../../services/hero.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-delete-hero',
  templateUrl: './delete-hero.component.html',
  styleUrls: ['./delete-hero.component.scss']
})
export class DeleteHeroComponent implements OnInit {

  @Input() hero:Hero;

  constructor(
    private heroService:HeroService,
    private router:Router
    ) { }

  ngOnInit() {
  }

  delete(): void {
    this.heroService.deleteHero(this.hero).then(() => {
      //go back to dashboard
      this.router.navigateByUrl('/dashboard');
    });
  }
}
