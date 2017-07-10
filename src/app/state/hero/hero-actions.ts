import { Action } from '@ngrx/store';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Hero } from '../../models/hero';
import * as fromHero from './hero-reducer';

export const CREATE         = '[Hero] Create]';
export const UPDATE         = '[Hero] Update';
export const DELETE         = '[Hero] Delete';
export const LIST           = '[Hero] List';
export const LIST_UPDATE    = '[Hero] List Update';
export const SEARCH         = '[Hero] Search';
export const SEARCH_SUCCESS = '[Hero] Search Success';

export class Create implements Action {
  readonly type = CREATE;
  constructor(public payload: string) { }
}

export class Update implements Action {
  readonly type = UPDATE;
  constructor(public payload: Hero) { }
}

export class Delete implements Action {
  readonly type = DELETE;
  constructor(public payload: Hero) { }
}

export class List implements Action {
  readonly type = LIST
}

export class ListUpdate implements Action {
  readonly type = LIST_UPDATE
  constructor(public payload:Hero[]) { }
}

export class Search implements Action {
  readonly type = SEARCH;
  constructor(public payload: string) { }
}

export class SearchSuccess implements Action {
  readonly type = SEARCH_SUCCESS;
  constructor(public payload: Hero[]) { }
}

export type All = Create | Update | Delete | List | ListUpdate | Search | SearchSuccess;
