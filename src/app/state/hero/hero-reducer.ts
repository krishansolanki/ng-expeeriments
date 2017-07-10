import { Hero } from '../../models/hero';
import * as HeroActions from './hero-actions';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable'


export interface State {
  heroes: Hero[],
  search: {
    term: string,
    results: Hero[]
  }
}

const initialState: State = {
  heroes: [],
  search: {
    term: '',
    results: []
  }
}

export function reducer(state = initialState, action: HeroActions.All): State {
  switch (action.type) {
    case HeroActions.CREATE:
      return {
        ...state,
        hero: action.payload
      };
    case HeroActions.UPDATE:
      return {
        ...state,
        hero: action.payload
      };
    case HeroActions.DELETE:
      return {
        ...state,
        hero: action.payload
      };
    case HeroActions.LIST:
      return {
        ...state
      }
    case HeroActions.LIST_UPDATE:
      return  {
        ...state,
        heroes: action.payload
      }
    case HeroActions.SEARCH:
      state.search.term = action.payload;
      return {
        ...state,
        term: action.payload
      }
    case HeroActions.SEARCH_SUCCESS:
      state.search.results = action.payload;
      return {
        ...state,
      }
    default: {
      return state
    }
  }
}
