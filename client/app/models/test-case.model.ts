import { InputModels, StringInputModel, TextInputModel } from './form-element';

export interface TestCase {
  id: number;
  title: string;
  description: string;
}

export const TestCaseForm: InputModels = [
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
