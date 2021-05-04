import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditPersonComponent } from './addedit-person.component';

describe('AddeditPersonComponent', () => {
  let component: AddeditPersonComponent;
  let fixture: ComponentFixture<AddeditPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
