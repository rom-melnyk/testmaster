import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRegressionCyclesComponent } from './all-regression-cycles.component';

describe('AllRegressionCyclesComponent', () => {
  let component: AllRegressionCyclesComponent;
  let fixture: ComponentFixture<AllRegressionCyclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllRegressionCyclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllRegressionCyclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
