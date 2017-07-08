import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDeleteComponent } from './hero-delete.component';

describe('DeleteHeroComponent', () => {
  let component: HeroDeleteComponent;
  let fixture: ComponentFixture<HeroDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
