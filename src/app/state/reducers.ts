import * as fromHero from './hero/hero-reducer';

export interface State {
  hero: fromHero.State;
}

export const reducers = {
  hero: fromHero.reducer
}

export function selectHeroHeroes(state:State) {
  return state.hero.heroes;
}

export function selectHeroSearchResult(state:State) {
  return state.hero.search.results;
}

export function selectHeroSearchTerm(state:State) {
  return state.hero.search.term;
}
