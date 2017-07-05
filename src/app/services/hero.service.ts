import { Injectable } from '@angular/core';
import { Hero } from '../classes/hero'
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {
  private heroesUrl = 'api/heroes';

  constructor(private http:Http) { }

  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
    .toPromise()
    .then(response => response.json().data as Hero[])
    .catch(this.handleError)
  }

  getHero(id: number): Promise<Hero> {
    return this.http.get(`${this.heroesUrl}/${id}`)
    .toPromise()
    .then(response => response.json().data as Hero)
    .catch (this.handleError)
  }

  updateHero(hero: Hero): Promise<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;

    return this.http.put(url, JSON.stringify(hero), this.headers)
    .toPromise()
    .then(() => hero)
    .catch(this.handleError)
  }

  createHero(heroName: string): Promise<any> {
    return this.getHeroes()
    .then(heroes => {
      if (heroes.some((existingHero:Hero): boolean => existingHero.name === heroName)) {
        return false;
      }

      return this.http.post(this.heroesUrl, JSON.stringify({name:heroName}), this.headers)
      .toPromise()
      .then((res) => {
        let createdHero = res.json().data as Hero;
        heroes.push(createdHero);
        return createdHero;
      })
      .catch(this.handleError)
    })
  }

  deleteHero(hero:Hero): Promise<void> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http.delete(url, {headers:this.headers})
    .toPromise()
    .then(() => {
      return null;
    })
    .catch(this.handleError);
  }

  private headers = new Headers({'Content-Type':'application/json'});

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
