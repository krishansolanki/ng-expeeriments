import { Action } from '@ngrx/store';
import { Hero } from '../../models/hero';

export const CREATE       = '[Hero] Create]';
export const UPDATE       = '[Hero] Update';
export const DELETE       = '[Hero] Delete';
export const LIST         = '[Hero] List';
export const LIST_UPDATE  = '[Hero] List Update'

export class Create implements Action {
  readonly type = CREATE;

  constructor(public payload: string) { }
}

export class Update implements Action {
  readonly type = UPDATE;

  constructor(public payload: string) { }
}

export class Delete implements Action {
  readonly type = DELETE;

  constructor(public payload: string) { }
}

export class List implements Action {
  readonly type = LIST
}

export class ListUpdate implements Action {
  readonly type = LIST_UPDATE
  constructor(public payload:Hero[]) { }
}

export type All = Create | Update | Delete | List | ListUpdate;
