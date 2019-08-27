import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardAndPoors500Component } from './standard-and-poors500.component';

describe('StandardAndPoors500Component', () => {
  let component: StandardAndPoors500Component;
  let fixture: ComponentFixture<StandardAndPoors500Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardAndPoors500Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardAndPoors500Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
