import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';

import { HeroService } from '../../services/hero.service';
import * as HeroActions from './hero-actions';

@Injectable()
export class HeroEffects {
  @Effect()
  getHeroes$: Observable<Action> = this.actions$.ofType(HeroActions.LIST)
  .switchMap(() => this.heroService.getHeroes())
  .map(results => new HeroActions.ListUpdate(results))

  constructor(
    private actions$: Actions,
    private heroService: HeroService
  ) { }
}
