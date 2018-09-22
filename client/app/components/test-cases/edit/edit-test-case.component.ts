import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TestCaseForm } from '../../../models/test-case.model';
import { TestCasesService } from '../../../services/test-cases.service';

@Component({
  selector: 'tm-new-test-case',
  template: `
    <div class="container">
      <h1>New Test Case</h1>
      <tm-form [inputModels]="testCaseForm" [onSubmit]="onSubmit" (submitted)="onSubmitted($event)"></tm-form>
    </div>
  `,
  styleUrls: [ './edit-test-case.component.scss' ]
})
export class EditTestCaseComponent implements OnInit {
  public readonly testCaseForm = TestCaseForm;
  public onSubmit: (data: any) => Promise<any>;

  constructor(
    private location: Location,
    private testCasesService: TestCasesService,
  ) { }

  ngOnInit() {
    this.onSubmit = (testCase) => {
      return this.testCasesService.createTestCase(testCase);
    };
  }

  onSubmitted(result) {
    if (result) {
      this.location.back();
    }
  }
}
