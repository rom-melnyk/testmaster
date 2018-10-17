import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormModel } from '../../../models/form-element';
import { TestCaseFormModel, TestCaseModel } from '../../../models/test-case.model';
import { createFormModel } from '../../forms/form-model-creator';
import { TestCasesService } from '../../../services/test-cases.service';
import { AttachmentsComponent } from '../../attachments/attachments.component';

@Component({
  selector: 'tm-new-test-case',
  template: `
    <div class="container">
      <h1>{{title}}</h1>
      <tm-form [formModel]="testCaseFormModel" [onSubmit]="onSubmit" (submitted)="onSubmitted($event)"></tm-form>
      <hr/>
      <tm-attachments [attachments]="attachments" [mode]="'edit'" (updated)="onAttachmentsUpdated($event)"></tm-attachments>
    </div>
  `,
  styleUrls: [ './edit-test-case.component.scss' ]
})
export class EditTestCaseComponent implements OnInit {
  public title: string;
  public attachments: string[] = [];
  public testCaseFormModel: FormModel;
  public onSubmit: (data: any) => Promise<any>;
  public onAttachmentsUpdated: (attachments: string[]) => Promise<any>;

  @ViewChild(AttachmentsComponent) private attachmentsComponent: AttachmentsComponent;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private testCasesService: TestCasesService,
  ) { }

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam === 'new') {
      this.setupNewTestCase();
    } else {
      const id = Number.parseInt(idParam, 10);
      if (isNaN(id)) {
        throw new Error(`Bad id: "${idParam}"`);
      }
      this.setupEditTestCase(id);
    }
  }

  onSubmitted(result) {
    if (result) {
      this.location.back();
    }
  }

  setupNewTestCase() {
    this.title = 'New Test Case';
    this.onSubmit = (formData) => {
      const attachments = this.attachmentsComponent.attachments;
      return this.testCasesService.createTestCase({ ...formData, attachments });
    };
    this.onAttachmentsUpdated = () => Promise.resolve();
    this.testCaseFormModel = createFormModel(TestCaseFormModel);
  }

  setupEditTestCase(id: number) {
    this.title = `Test Case ${id}`;
    this.onSubmit = (formData) => {
      const attachments = this.attachmentsComponent.attachments;
      return this.testCasesService.updateTestCase({ id, ...formData, attachments });
    };
    this.onAttachmentsUpdated = (attachments: string[]) => {
      return this.testCasesService.updateTestCase({ id, attachments } as TestCaseModel)
        .catch(console.error);
    };
    this.testCasesService.getTestCase(id)
      .then((testCase) => {
        this.attachments = testCase.attachments;
        this.testCaseFormModel = createFormModel(TestCaseFormModel, testCase);
      })
      .catch(console.error);
  }
}
