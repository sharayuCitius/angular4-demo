import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballersListComponent } from './footballers-list.component';

describe('FootballersListComponent', () => {
  let component: FootballersListComponent;
  let fixture: ComponentFixture<FootballersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootballersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
