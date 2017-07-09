import { Hero } from '../../models/hero';
import * as HeroActions from './hero-actions';


export interface State {
  heroes: Hero[]
}

const initialState: State = {
  heroes: []
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
    default: {
      return state
    }
  }
}
