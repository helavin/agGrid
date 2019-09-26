import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGridApplicationComponent } from './my-grid-application.component';
import { NO_ERRORS_SCHEMA } from '@angular/compiler/src/core';

describe('MyGridApplicationComponent', () => {
  let component: MyGridApplicationComponent;
  let fixture: ComponentFixture<MyGridApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyGridApplicationComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyGridApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
