import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimedDisplayComponent } from './timed-display.component';

describe('TimedDisplayComponent', () => {
  let component: TimedDisplayComponent;
  let fixture: ComponentFixture<TimedDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimedDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimedDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
