import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Nasdaq100Component } from './nasdaq100.component';

describe('Nasdaq100Component', () => {
  let component: Nasdaq100Component;
  let fixture: ComponentFixture<Nasdaq100Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nasdaq100Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nasdaq100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
