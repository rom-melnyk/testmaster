import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InputModels } from '../../../models/form-element';
import { Observable } from 'rxjs';

@Component({
  selector: 'tm-form',
  templateUrl: './form.component.html',
  styles: [
    `:host { display: block; }`,
    `form { display: block; }`
  ]
})
export class FormComponent implements OnInit {
  public normalizedInputModels: InputModels;
  public form: FormGroup;
  @Input() private inputModels: InputModels;
  @Input() onSubmit: (any) => Observable<any>;

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

  _onSubmit() {
    if (this.onSubmit) {
      this.onSubmit(this.form.value);
    }
  }
}
