import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../../models/hero'
import { Observable } from 'rxjs/Observable'
import { Store } from '@ngrx/store';
import * as HeroActions from '../../state/hero/hero-actions';
import * as fromRoot from '../../state/reducers';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HeroesComponent implements OnInit {
  heroes: Observable<Hero[]>;
  selectedHero: Hero;

  constructor(
    private router:Router,
    private store: Store<fromRoot.State>
    ) {
      this.heroes = store.select(fromRoot.selectHeroes)
    }

  ngOnInit(): void {
    this.store.dispatch(new HeroActions.List());
  }

  onSelect(hero:Hero): void {
    this.selectedHero = hero;
  }

  goToDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
