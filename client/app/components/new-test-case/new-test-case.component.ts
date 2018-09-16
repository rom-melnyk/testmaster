import { Component, OnInit } from '@angular/core';
import { TestCaseForm } from '../../models/test-case.model';

@Component({
  selector: 'tm-new-test-case',
  template: `
    <div class="container">
      <h1>New Test Case</h1>
      <tm-form-builder [inputModels]="testCaseForm"></tm-form-builder>
    </div>
  `,
  styleUrls: [ './new-test-case.component.scss' ]
})
export class NewTestCaseComponent implements OnInit {
  public readonly testCaseForm = TestCaseForm;

  constructor() { }

  ngOnInit() {
  }

}
