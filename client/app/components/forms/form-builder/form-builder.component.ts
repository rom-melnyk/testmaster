import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InputModels } from '../../../models/form-element';

@Component({
  selector: 'tm-form-builder',
  template: `
    <form (ngSubmit)="onSubmit()" [formGroup]="form">
      <ng-container *ngFor="let inputModel of inputModels">
        <ng-container [ngSwitch]="inputModel.type">
          <tm-string-input *ngSwitchCase="'string'" [form]="form" [inputModel]="inputModel"></tm-string-input>
          <div class="alert alert-danger" *ngSwitchDefault>
            Unknown input type: "{{inputModel.type}}".
          </div>
        </ng-container>
      </ng-container>
      <div class="row form-group no-gutters justify-content-end">
        <div class="btn-group">
          <a href="javascript:history.back();" class="btn btn-secondary">&larr;</a>
          <button class="btn btn-success" type="submit" [disabled]="!form.valid">Save</button>
        </div>
      </div>
    </form>
  `,
  styles: [
    `:host { display: block; }`,
    `form { display: block; }`
  ]
})
export class FormBuilderComponent implements OnInit {
  @Input() inputModels: InputModels;
  public form: FormGroup;

  constructor() { }

  ngOnInit() {
    const formGroup = this.inputModels.reduce((accum, inputModel) => {
      const validator = inputModel.required ? Validators.required : undefined;
      accum[inputModel.name] = new FormControl('', validator);
      return accum;
    }, {});
    this.form = new FormGroup(formGroup);
  }

  onSubmit() {
    console.log('Submit:', this.form.value);
  }
}
