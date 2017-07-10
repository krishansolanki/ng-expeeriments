import { Component, Input, OnInit, ChangeDetectionStrategy} from '@angular/core';
import { Store } from '@ngrx/store';
import * as HeroActions from '../../state/hero/hero-actions';
import * as fromRoot from '../../state/reducers';

@Component({
  selector: 'app-hero-create',
  templateUrl: './hero-create.component.html',
  styleUrls: ['./hero-create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroCreateComponent implements OnInit {
  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() {

  }

  create(heroName:string): void {
    this.store.dispatch(new HeroActions.Create(heroName))
  }

}
