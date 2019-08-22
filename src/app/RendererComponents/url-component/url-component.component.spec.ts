import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlComponentComponent } from './url-component.component';

describe('UrlComponentComponent', () => {
  let component: UrlComponentComponent;
  let fixture: ComponentFixture<UrlComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrlComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
