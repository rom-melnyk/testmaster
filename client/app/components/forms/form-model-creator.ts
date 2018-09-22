import { FormModel, InputModel } from '../../models/form-element';

export function createFormModel(formModel: FormModel, data?: any): FormModel {
  return formModel.map((inputModel: InputModel) => {
    let value = data ? data[inputModel.name] : (inputModel.defaultValue);
    if (value == null) {
      value = '';
    }

    const comment = inputModel.messages && inputModel.messages.comment
      ? inputModel.messages.comment
      : '';
    const invalid = inputModel.messages && inputModel.messages.invalid
      ? inputModel.messages.invalid
      : ( inputModel.required
          ? 'Value required'
          : ''
      );

    return Object.assign({}, inputModel, { value, messages: { comment, invalid }, });
  });
}
