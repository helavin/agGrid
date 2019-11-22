import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PublishedAtComponent } from './publishedAt.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('PublishedAtComponent', () => {
  let component: PublishedAtComponent;
  let fixture: ComponentFixture<PublishedAtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PublishedAtComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishedAtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
