import { Location } from '@angular/common';
import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges, SimpleChange } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormModel, TextInputModel } from '../../../models/form-element';
import { markdown } from 'markdown';
import { debounce, map, merge } from 'rxjs/operators';
import { of, timer } from 'rxjs';

@Component({
  selector: 'tm-form',
  templateUrl: './form.component.html',
  styles: [
    `:host { display: block; }`,
    `form { display: block; }`,
    `.submission-error-message { margin: 0 1rem 0 0; }`,
    `textarea { min-height: 15rem; }`, // 10 lines
  ]
})
export class FormComponent implements OnInit, OnChanges {
  public form: FormGroup;
  public isSubmitting = false;
  public submissionError = false;

  @Input() public formModel: FormModel = [];
  @Input() private onSubmit: (any) => Promise<any>;
  @Output() submitted = new EventEmitter<boolean>();

  constructor(
    private location: Location,
  ) { }

  ngOnInit() {
    this.buildForm(this.formModel);
  }

  ngOnChanges(changes: SimpleChanges) {
    const formModelChange: SimpleChange = changes['formModel'];
    if (!formModelChange) {
      return;
    }

    this.buildForm(formModelChange.currentValue);
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

  private buildForm(formModel: FormModel) {
    const formGroup = (formModel || []).reduce((accum, inputModel) => {
      const validator = inputModel.required ? Validators.required : undefined;
      const formControl = new FormControl(inputModel.value, validator);
      if (inputModel.type === 'text') {
        // prepare stream delivering compiled MarkDown
        (<TextInputModel>inputModel).html$ = of(inputModel.value).pipe(
          merge(
            formControl.valueChanges.pipe(
              debounce(() => timer(500))
            )
          ),
          map((data) => {
            return markdown.toHTML(data);
          }),
        );
      }
      accum[inputModel.name] = formControl;
      return accum;
    }, {});
    this.form = new FormGroup(formGroup);
  }
}
