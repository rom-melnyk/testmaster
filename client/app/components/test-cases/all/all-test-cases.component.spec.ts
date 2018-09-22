import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTestCasesComponent } from './all-test-cases.component';

describe('AllTestCasesComponent', () => {
  let component: AllTestCasesComponent;
  let fixture: ComponentFixture<AllTestCasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllTestCasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTestCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
