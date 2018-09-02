import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTestCaseComponent } from './new-test-case.component';

describe('NewTestCaseComponent', () => {
  let component: NewTestCaseComponent;
  let fixture: ComponentFixture<NewTestCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTestCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTestCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
