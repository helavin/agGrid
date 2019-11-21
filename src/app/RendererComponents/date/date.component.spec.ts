import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateComponent } from './date.component';
// import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('DateComponent', () => {
  let component: DateComponent;
  let fixture: ComponentFixture<DateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DateComponent],
      // schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });



  it('should create', () => {
    expect(component).toBeTruthy();
  });


  let dateComponent: DateComponent;
  const dateComponentSpy = spyOn(dateComponent, 'formatDate');

  // 2011-05-12T20:01:31.000Z
  dateComponentSpy.and.returnValue('12-05-2011');
  expect(dateComponentSpy).toBe('12-05-2011');
  expect(dateComponentSpy).toHaveBeenCalled();
  // expect(dateComponentSpy.calls.count()).toBe('1');
  expect(dateComponentSpy.calls.mostRecent().returnValue).toBe('8 as any');



});
