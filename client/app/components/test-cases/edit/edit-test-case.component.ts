import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormModel } from '../../../models/form-element';
import { TestCaseFormModel } from '../../../models/test-case.model';
import { createFormModel } from '../../forms/form-model-creator';
import { TestCasesService } from '../../../services/test-cases.service';

@Component({
  selector: 'tm-new-test-case',
  template: `
    <div class="container">
      <h1>{{title}}</h1>
      <tm-form [formModel]="testCaseFormModel" [onSubmit]="onSubmit" (submitted)="onSubmitted($event)"></tm-form>
      <hr/>
      <tm-attachments [testCaseId]="1" [mode]="'edit'"></tm-attachments>
    </div>
  `,
  styleUrls: [ './edit-test-case.component.scss' ]
})
export class EditTestCaseComponent implements OnInit {
  public title: string;
  public testCaseFormModel: FormModel;
  public onSubmit: (data: any) => Promise<any>;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private testCasesService: TestCasesService,
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id === 'new') {
      this.title = 'New Test Case';
      this.onSubmit = (testCase) => {
        return this.testCasesService.createTestCase(testCase);
      };
      this.testCaseFormModel = createFormModel(TestCaseFormModel);
    } else {
      this.title = `Test Case ${id}`;
      this.onSubmit = (testCase) => {
        return this.testCasesService.updateTestCase({ id, ...testCase });
      };
      this.testCasesService.getTestCase(+id)
        .then((testCase) => {
          this.testCaseFormModel = createFormModel(TestCaseFormModel, testCase);
        })
        .catch(console.error);
    }
  }

  onSubmitted(result) {
    if (result) {
      this.location.back();
    }
  }
}
