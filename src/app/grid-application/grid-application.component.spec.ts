import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridApplicationComponent } from './grid-application.component';
import { NO_ERRORS_SCHEMA } from '@angular/compiler/src/core';

describe('GridApplicationComponent', () => {
  let component: GridApplicationComponent;
  let fixture: ComponentFixture<GridApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridApplicationComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
