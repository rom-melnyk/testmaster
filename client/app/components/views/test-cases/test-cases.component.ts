import { Component, OnInit } from '@angular/core';
import { TestCasesService } from '../../../services/test-cases.service';
import { TestCase } from '../../../models/test-case.model';

@Component({
  selector: 'tm-test-cases',
  templateUrl: './test-cases.component.html',
  styleUrls: [ './test-cases.component.scss' ]
})
export class TestCasesComponent implements OnInit {
  public testCases: TestCase[] = [];

  constructor(
    private testCasesService: TestCasesService,
  ) { }

  ngOnInit() {
    this.testCasesService.getTestCases()
      .subscribe((testCases: TestCase[]) => {
        this.testCases = testCases;
      });
  }

}
