import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PublishedAtComponent } from './publishedAt.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('PublishedAt component', () => {
  let component: PublishedAtComponent;
  let fixture: ComponentFixture<PublishedAtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PublishedAtComponent]
      // schemas: [NO_ERRORS_SCHEMA]
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

  it('should get formatted date', () => {
    const unformattedDate = '2011-05-12T20:01:31.000Z';
    expect(component.formatDate(unformattedDate)).toBe('12-05-2011', 'date value');
  });

});
