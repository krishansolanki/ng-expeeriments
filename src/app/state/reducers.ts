import * as fromHero from './hero/hero-reducer';

export interface State {
  hero: fromHero.State;
}

export const reducers = {
  hero: fromHero.reducer
}

export function selectHeroes(state:State) {
  return state.hero.heroes;
}
