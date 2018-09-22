import { Component, OnInit } from '@angular/core';
import { TestCaseForm } from '../../models/test-case.model';
import { TestCasesService } from '../../services/test-cases.service';

@Component({
  selector: 'tm-new-test-case',
  template: `
    <div class="container">
      <h1>New Test Case</h1>
      <tm-form [inputModels]="testCaseForm" [onSubmit]="onSubmit"></tm-form>
    </div>
  `,
  styleUrls: [ './new-test-case.component.scss' ]
})
export class NewTestCaseComponent implements OnInit {
  public readonly testCaseForm = TestCaseForm;
  public onSubmit: (data: any) => void;

  constructor(
    private testCasesService: TestCasesService,
  ) { }

  ngOnInit() {
    this.onSubmit = (testCase) => {
      this.testCasesService.createTestCase(testCase)
        .then((data) => {})
        .catch(console.error)
        .then(() => {
          history.back();
        });
    };
  }
}
