import { FormModel, StringInputModel, TextInputModel } from './form-element';

export interface TestCaseModel {
  id: number;
  title: string;
  description: string;
}

export const TestCaseFormModel: FormModel = [
  <StringInputModel>{
    name: 'title',
    type: 'string',
    required: true,
  },
  <TextInputModel>{
    name: 'description',
    type: 'text',
  },
];
