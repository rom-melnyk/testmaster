import { Observable } from 'rxjs';

export interface InputModel {
  name: string;
  value: any;
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
  html?: string;
  html$?: Observable<string>;
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

export type FormModel = InputModel[];
