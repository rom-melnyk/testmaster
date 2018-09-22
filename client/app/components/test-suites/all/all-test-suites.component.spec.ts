import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTestSuitesComponent } from './all-test-suites.component';

describe('AllTestSuitesComponent', () => {
  let component: AllTestSuitesComponent;
  let fixture: ComponentFixture<AllTestSuitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllTestSuitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTestSuitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
