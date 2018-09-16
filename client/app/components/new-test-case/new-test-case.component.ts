import { Component, OnInit } from '@angular/core';
import { TestCaseForm } from '../../models/test-case.model';

@Component({
  selector: 'tm-new-test-case',
  templateUrl: './new-test-case.component.html',
  styleUrls: [ './new-test-case.component.scss' ]
})
export class NewTestCaseComponent implements OnInit {
  public readonly testCaseForm = TestCaseForm;

  constructor() { }

  ngOnInit() {
  }

}
