import { Injectable } from '@angular/core';
import { Hero } from '../models/hero'
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {
  private heroesUrl = 'api/heroes';

  constructor(private http:Http) { }

  getHeroes(): Observable<Hero[]> {
    return this.http.get(this.heroesUrl)
    .map(response => response.json().data as Hero[])
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

  createHero(heroName: string): Observable<Hero> {
    return this.http.post(this.heroesUrl, JSON.stringify({name:heroName}), this.headers)
    .map(response => response.json().data as Hero)
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
