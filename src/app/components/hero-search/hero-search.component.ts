import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/observable/of';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { HeroSearchService } from '../../services/hero-search.service';
import { Hero } from '../../models/hero'

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss'],
  providers: [HeroSearchService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroSearchComponent implements OnInit {
  heroes: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private heroSearchService: HeroSearchService,
    private router: Router) { };

  //push a search term into the observable stream
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    // return the http search observable or an empty observable array
    this.heroes = this.searchTerms
    .debounceTime(300)        //wait 300ms before considering term
    .distinctUntilChanged()   //prevent event from reaching search when input is the same
    //return an observable array of heroes
    .switchMap(term => term ? this.heroSearchService.search(term) : Observable.of<Hero[]>([]))
    .catch( error => {
      console.log(error);
      return Observable.of<Hero[]>([])
    })
  }

  goToDetail(hero:Hero):void {
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }

}
