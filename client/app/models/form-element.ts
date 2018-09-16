interface InputElement {
  name: string;
  label?: string;
  defaultValue?: any;
  required?: boolean;
};

export interface StringInput extends InputElement {
  type: 'string';
}

export interface TextInput extends InputElement {
  type: 'text';
}

export interface NumberInput extends InputElement {
  type: 'number';
  min: number;
  max: number;
  step?: number;
}

export interface DropdownInput extends InputElement {
  type: 'dropdown';
  options: Array<{ name: string; value: string | number }>;
}

export type InputElements = InputElement[];
