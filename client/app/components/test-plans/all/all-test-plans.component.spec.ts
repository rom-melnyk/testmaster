import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTestPlansComponent } from './all-test-plans.component';

describe('AllTestPlansComponent', () => {
  let component: AllTestPlansComponent;
  let fixture: ComponentFixture<AllTestPlansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllTestPlansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTestPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
