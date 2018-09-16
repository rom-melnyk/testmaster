import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { StringInputModel } from '../../../models/form-element';

@Component({
  selector: 'tm-string-input',
  template: `
    <div class="row" [formGroup]="form">
      <div class="col-4">
        <label for="{{inputModel.name}}">{{inputModel.label || inputModel.name}}</label>
      </div>
      <div class="col-8">
        <input type="text" id="{{inputModel.name}}" [formControlName]="inputModel.name">
        <div class="errorMessage" *ngIf="!isValid()">{{messages.invalid}}</div>
      </div>
    </div>
  `,
  styles: []
})
export class StringInputComponent implements OnInit {
  @Input() inputModel: StringInputModel;
  @Input() form: FormGroup;
  public messages: { explain: string; invalid: string };

  constructor() { }

  ngOnInit() {
    const explain = this.inputModel.messages && this.inputModel.messages.explain
      ? this.inputModel.messages.explain
      : `Enter the ${this.inputModel.name}`;
    const invalid = this.inputModel.messages && this.inputModel.messages.invalid
      ? this.inputModel.messages.invalid
      : ( this.inputModel.required
        ? 'Value required'
        : 'Invalid value'
      );
    this.messages = { explain, invalid };
  }

  isValid() {
    return this.form.controls[this.inputModel.name].valid;
  }
}
