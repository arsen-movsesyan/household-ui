import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditAccountComponent } from './addedit-account.component';

describe('AddeditAccountComponent', () => {
  let component: AddeditAccountComponent;
  let fixture: ComponentFixture<AddeditAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
