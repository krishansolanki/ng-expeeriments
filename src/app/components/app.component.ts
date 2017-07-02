import { Component, OnInit } from '@angular/core';
import { Hero } from '../classes/hero'
import { HeroService } from '../services/hero.service'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'Tour of Heroes';

  constructor() {}

  ngOnInit(): void {}

}
