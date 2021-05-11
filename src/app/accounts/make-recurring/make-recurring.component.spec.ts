import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeRecurringComponent } from './make-recurring.component';

describe('MakeRecurringComponent', () => {
  let component: MakeRecurringComponent;
  let fixture: ComponentFixture<MakeRecurringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeRecurringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeRecurringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
