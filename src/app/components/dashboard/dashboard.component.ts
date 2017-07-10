import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Hero } from '../../models/hero'
import { Observable } from 'rxjs/Observable'
import { Store } from '@ngrx/store';
import * as HeroActions from '../../state/hero/hero-actions';
import * as fromRoot from '../../state/reducers';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {
  heroes: Observable<Hero[]>;

  constructor(private store: Store<fromRoot.State>) {
    this.heroes = store.select(fromRoot.selectHeroHeroes)
  }

  ngOnInit(): void {
    this.store.dispatch(new HeroActions.List())
  }

}
