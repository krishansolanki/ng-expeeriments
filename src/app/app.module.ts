import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'
import { NgModule } from '@angular/core';
import { RoutingModule } from './routing/routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryDataService }  from './in-memory-data.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './components/app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroCreateComponent } from './components/create-hero/hero-create.component';
import { HeroDeleteComponent } from './components/delete-hero/hero-delete.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';

import { HeroService } from './services/hero.service';

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
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})

export class AppModule { }
