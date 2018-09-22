import { Component, OnInit } from '@angular/core';
import { TestCasesService } from '../../../services/test-cases.service';
import { TestCaseModel } from '../../../models/test-case.model';

@Component({
  selector: 'tm-all-test-cases',
  templateUrl: './all-test-cases.component.html',
  styleUrls: [ './all-test-cases.component.scss' ]
})
export class AllTestCasesComponent implements OnInit {
  public isLoading: boolean;
  public testCases: TestCaseModel[] = [];

  constructor(
    private testCasesService: TestCasesService,
  ) { }

  ngOnInit() {
    this.isLoading = true;
    this.loadTestCases();
  }

  deleteTestCase(testCase: TestCaseModel) {
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
      .then((testCases: TestCaseModel[]) => {
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
