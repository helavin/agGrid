import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TxtComponentComponent } from './txt-component.component';

describe('TxtComponentComponent', () => {
  let component: TxtComponentComponent;
  let fixture: ComponentFixture<TxtComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TxtComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TxtComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
