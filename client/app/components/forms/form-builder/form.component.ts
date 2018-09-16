import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InputModels } from '../../../models/form-element';

@Component({
  selector: 'tm-form',
  templateUrl: './form.component.html',
  styles: [
    `:host { display: block; }`,
    `form { display: block; }`
  ]
})
export class FormComponent implements OnInit {
  @Input() private inputModels: InputModels;
  public normalizedInputModels: InputModels;
  public form: FormGroup;

  constructor() { }

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

  onSubmit() {
    console.log('Submit:', this.form.value);
  }
}
