import { Location } from '@angular/common';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InputModels } from '../../../models/form-element';

@Component({
  selector: 'tm-form',
  templateUrl: './form.component.html',
  styles: [
    `:host { display: block; }`,
    `form { display: block; }`,
    `.submission-error-message { margin: 0 1rem 0 0; }`
  ]
})
export class FormComponent implements OnInit {
  public normalizedInputModels: InputModels;
  public form: FormGroup;
  public isSubmitting = false;
  public submissionError = false;

  @Input() private inputModels: InputModels;
  @Input() onSubmit: (any) => Promise<any>;
  @Output() submitted = new EventEmitter<boolean>();

  constructor(
    private location: Location,
  ) { }

  ngOnInit() {
    this.normalizedInputModels = this.inputModels.map((inputModel) => {
      const comment = inputModel.messages && inputModel.messages.comment
        ? inputModel.messages.comment
        : '';
      const invalid = inputModel.messages && inputModel.messages.invalid
        ? inputModel.messages.invalid
        : ( inputModel.required
            ? 'Value required'
            : ''
        );
      return Object.assign({}, inputModel, { messages: { comment, invalid } });
    });

    const formGroup = this.inputModels.reduce((accum, inputModel) => {
      const validator = inputModel.required ? Validators.required : undefined;
      accum[inputModel.name] = new FormControl('', validator);
      return accum;
    }, {});
    this.form = new FormGroup(formGroup);
  }

  _onSubmit() {
    if (!this.onSubmit) {
      return;
    }

    this.isSubmitting = true;
    this.onSubmit(this.form.value)
      .then((result: any) => {
        this.isSubmitting = false;
        this.submissionError = false;
        this.submitted.emit(true);
      })
      .catch((e: any) => {
        console.error(e);
        this.isSubmitting = false;
        this.submissionError = true;
        this.submitted.emit(false);
      });
  }

  goBack() {
    if (!this.form.dirty || confirm('Sure to ditch unsaved data?')) {
      this.location.back();
    }
  }
}
