import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as HeroActions from '../../state/hero/hero-actions';
import * as fromRoot from '../../state/reducers';

import { Hero } from '../../models/hero';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HeroSearchComponent implements OnInit {
  heroes: Observable<Hero[]>;
  private searchTerm: Observable<string>;

  constructor(
    private store: Store<fromRoot.State>,
    private router: Router) {
      this.heroes = store.select(fromRoot.selectHeroSearchResult)
      this.searchTerm = store.select(fromRoot.selectHeroSearchTerm)
    };

  ngOnInit(): void {

  }

  search(term: string): void {
    this.store.dispatch(new HeroActions.Search(term));
  }

  goToDetail(hero:Hero):void {
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }

}
