import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneTestCaseComponent } from './one-test-case.component';

describe('OneTestCaseComponent', () => {
  let component: OneTestCaseComponent;
  let fixture: ComponentFixture<OneTestCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneTestCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneTestCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
