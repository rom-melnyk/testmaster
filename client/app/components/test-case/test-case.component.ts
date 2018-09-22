import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TestCasesService } from '../../services/test-cases.service';
import { TestCase } from '../../models/test-case.model';

@Component({
  selector: 'tm-test-case',
  templateUrl: './test-case.component.html',
  styleUrls: [ './test-case.component.scss' ]
})
export class TestCaseComponent implements OnInit {
  public id: number;
  public testCase: TestCase;
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
      .then((testCase: TestCase) => {
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

}
