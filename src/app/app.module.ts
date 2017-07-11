import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http'
import { NgModule }             from '@angular/core';
import { StoreModule }          from '@ngrx/store'
import { EffectsModule }        from '@ngrx/effects';
import { StoreDevtoolsModule }  from '@ngrx/store-devtools';

import { RoutingModule } from './routing/routing.module';
// Imports for loading & configuring the in-memory web api (remove when api is built)
import { InMemoryDataService }  from './in-memory-data.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { HeroService }          from './services/hero.service';
import { HeroSearchService }          from './services/hero-search.service';

import { reducers }             from './state/reducers';
import { HeroEffects }          from './state/hero/hero-effects';

import { AppComponent }         from './components/app.component';
import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { HeroesComponent }      from './components/heroes/heroes.component';
import { HeroCreateComponent }  from './components/hero-create/hero-create.component';
import { HeroDeleteComponent }  from './components/hero-delete/hero-delete.component';
import { HeroDetailComponent }  from './components/hero-detail/hero-detail.component';
import { HeroSearchComponent }  from './components/hero-search/hero-search.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    HeroCreateComponent,
    HeroDeleteComponent,
    HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    RoutingModule,
    StoreModule.provideStore(reducers),
    EffectsModule.run(HeroEffects),
    StoreDevtoolsModule.instrumentOnlyWithExtension()
  ],
  providers: [HeroService, HeroSearchService],
  bootstrap: [AppComponent]
})

export class AppModule { }
