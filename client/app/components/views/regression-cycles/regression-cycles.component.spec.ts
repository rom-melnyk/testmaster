import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegressionCyclesComponent } from './regression-cycles.component';

describe('RegressionCyclesComponent', () => {
  let component: RegressionCyclesComponent;
  let fixture: ComponentFixture<RegressionCyclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegressionCyclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegressionCyclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
