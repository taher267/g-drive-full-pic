import {
  ChangeEventHandler,
  FocusEventHandler,
  FormEventHandler,
  HTMLAttributes,
  InputHTMLAttributes,
  MouseEventHandler,
} from 'react';

export interface ButtonProps {
  content: string;
  title?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset' | undefined;
  containerStyles?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface SearchbarProps {
  formStyles?: string;
  handleSubmit: FormEventHandler<HTMLFormElement>;
}
export interface ProductProps {
  _id: string;
  name: string;
  description?: string;
  price?: number;
  drive_id: string;
}
export interface FileProps {
  id: string;
  name: string;
  kind: string;
  mimeType: string;
}
