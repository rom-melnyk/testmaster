import { InputElements, StringInput, TextInput } from './form-element';

export interface TestCase {
  id: number;
  title: string;
  description: string;
}

export const TestCaseFormSkeleton: InputElements = [
  <StringInput>{
    name: 'name',
    type: 'string',
    required: true,
  },
  <TextInput>{
    name: 'description',
    type: 'text',
  },
];
