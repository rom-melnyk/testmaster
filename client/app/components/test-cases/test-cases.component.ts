import { Component, OnInit } from '@angular/core';
import { TestCasesService } from '../../services/test-cases.service';
import { TestCase } from '../../models/test-case.model';

@Component({
  selector: 'tm-test-cases',
  templateUrl: './test-cases.component.html',
  styleUrls: [ './test-cases.component.scss' ]
})
export class TestCasesComponent implements OnInit {
  public isLoading: boolean;
  public testCases: TestCase[] = [];

  constructor(
    private testCasesService: TestCasesService,
  ) { }

  ngOnInit() {
    this.isLoading = true;
    this.loadTestCases();
  }

  deleteTestCase(testCase: TestCase) {
    const id = +testCase.id;
    const title = testCase.title.length > 30
      ? (testCase.title.slice(0, 30) + '...')
      : testCase.title;
    if (confirm(`Sure to delete the Test Case\n"${title}"?`)) {
      this.testCasesService.deleteTestCase(id)
        .then(() => {
          return this.loadTestCases();
        })
        .catch(console.error);
    }
  }

  private loadTestCases() {
    return this.testCasesService.getTestCases()
      .then((testCases: TestCase[]) => {
        this.testCases = testCases;
      })
      .catch((e) => {
        console.error(e);
        this.testCases = null;
      })
      .then(() => {
        this.isLoading = false;
      });
  }
}
