import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateComponentComponent } from './date-component.component';
// import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('DateComponentComponent', () => {
  let component: DateComponentComponent;
  let fixture: ComponentFixture<DateComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateComponentComponent ],
      // schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
