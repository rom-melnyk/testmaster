interface InputModel {
  name: string;
  type: 'string' | 'text' | 'number' | 'dropdown';
  label?: string;
  defaultValue?: any;
  required?: boolean;
  messages: { comment?: string; invalid?: string };
}

export interface StringInputModel extends InputModel {
  type: 'string';
}

export interface TextInputModel extends InputModel {
  type: 'text';
}

export interface NumberInputModel extends InputModel {
  type: 'number';
  min: number;
  max: number;
  step?: number;
}

export interface DropdownInputModel extends InputModel {
  type: 'dropdown';
  options: Array<{ name: string; value: string | number }>;
}

export type InputModels = InputModel[];
