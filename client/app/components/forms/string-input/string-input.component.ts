import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { StringInputModel } from '../../../models/form-element';

@Component({
  selector: 'tm-string-input',
  template: `
    <div class="row form-group" [formGroup]="form">
      <label for="{{inputModel.name}}" class="col-4 col-form-label text-capitalize">
        {{inputModel.label || inputModel.name}}
        <strong class="text-danger required-label" *ngIf="inputModel.required">*</strong>
      </label>
      <div class="col-8">
        <input class="form-control" type="text" id="{{inputModel.name}}" [formControlName]="inputModel.name">
        <div class="comment">{{comment}}</div>
        <div class="error">{{invalidMessage}}</div>
      </div>
    </div>
  `,
  styles: [
    `.required-label {
      display: inline-block;
      margin-left: .25em;
    }`
  ]
})
export class StringInputComponent implements OnInit {
  @Input() inputModel: StringInputModel;
  @Input() form: FormGroup;
  public comment: string;
  public invalidMessage: string;

  constructor() { }

  ngOnInit() {
    this.comment = this.inputModel.messages && this.inputModel.messages.comment
      ? this.inputModel.messages.comment
      : `Enter the ${this.inputModel.name}`;
    this.invalidMessage = this.inputModel.messages && this.inputModel.messages.invalid
      ? this.inputModel.messages.invalid
      : ( this.inputModel.required
        ? 'Value required'
        : 'Invalid value'
      );
  }

  isValid() {
    return this.form.controls[this.inputModel.name].valid;
  }
}
