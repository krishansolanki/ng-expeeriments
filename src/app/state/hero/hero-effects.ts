import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';

import { HeroService } from '../../services/hero.service';
import { HeroSearchService } from '../../services/hero-search.service';
import * as HeroActions from './hero-actions';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class HeroEffects {
  @Effect()
  createHero$: Observable<Action> = this.actions$.ofType(HeroActions.CREATE)
  .map((action: HeroActions.Create) => action.payload)
  .switchMap(hero => this.heroService.createHero(hero))
  .map(hero => new HeroActions.List())

  @Effect()
  getHeroes$: Observable<Action> = this.actions$.ofType(HeroActions.LIST)
  .switchMap(() => this.heroService.getHeroes())
  .map(results => new HeroActions.ListUpdate(results));

  @Effect()
  searchHeroes$: Observable<Action> = this.actions$.ofType(HeroActions.SEARCH)
  .map((action: HeroActions.Search) => {
    return action.payload
  })
  .switchMap(term => this.heroSearchService.search(term))
  .map(results =>  new HeroActions.SearchSuccess(results));

  constructor(
    private actions$: Actions,
    private heroService: HeroService,
    private heroSearchService: HeroSearchService
  ) { }

}
