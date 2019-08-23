import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DowJones30Component } from './dow-jones30.component';

describe('DowJones30Component', () => {
  let component: DowJones30Component;
  let fixture: ComponentFixture<DowJones30Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DowJones30Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DowJones30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
