import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySsnComponent } from './display-ssn.component';

describe('DisplaySsnComponent', () => {
  let component: DisplaySsnComponent;
  let fixture: ComponentFixture<DisplaySsnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaySsnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaySsnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
