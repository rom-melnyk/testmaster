import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TestCasesService } from '../../../services/test-cases.service';
import { TestCaseModel } from '../../../models/test-case.model';

@Component({
  selector: 'tm-test-case',
  templateUrl: './one-test-case.component.html',
  styleUrls: [ './one-test-case.component.scss' ]
})
export class OneTestCaseComponent implements OnInit {
  public id: number;
  public testCase: TestCaseModel;
  public isLoading: boolean;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private testCasesService: TestCasesService,
  ) { }

  ngOnInit() {
    this.isLoading = true;
    this.id = +this.route.snapshot.paramMap.get('id');
    this.testCasesService.getTestCase(this.id)
      .then((testCase: TestCaseModel) => {
        this.testCase = testCase;
      })
      .catch((e) => {
        console.error(e);
        this.testCase = null;
      })
      .then(() => {
        this.isLoading = false;
      });
  }

  deleteTestCase() {
    if (confirm('Sure to delete the Test Case?')) {
      this.testCasesService.deleteTestCase(this.id)
        .then(() => {
          this.location.back();
        })
        .catch(console.error);
    }
  }

  goBack() {
    this.location.back();
  }
}
