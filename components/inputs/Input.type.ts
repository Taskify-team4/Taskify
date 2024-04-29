import { TColumn } from '@pages/dashboard/Dashboard.type';
import { ReactNode } from 'react';

export type InputProps = {
  children: ReactNode;
  id: string;
  type: string;
  inputType: string;
  placeholder: string;
  email?: string;
  nickname?: string;
  password?: string;
  passwordCheck?: string;
  passwordCompare?: boolean;
  onChange?: (value: string) => void;
  onError: (value: string) => void;
  errorMsg: string;
  disabled?: boolean;
  defaultValue?: string;
  inputValue?: string;
};

export type TextInputProps = {
  children: ReactNode;
  id: string;
  placeholder: string;
  email?: string;
  nickname?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
  defaultValue?: string;
};

export type PasswordInputProps = {
  children: ReactNode;
  id: string;
  type?: string;
  placeholder: string;
  password?: string;
  passwordCheck?: string;
  passwordCompare?: boolean;
  onChange?: (value: string) => void;
  inputValue?: string;
};

export type CommentInputProps = {
  children: ReactNode;
  placeholder?: string;
  onRequired?: boolean;
  onModal?: boolean;
  onChange?: (description: string) => void;
  onClick?: () => void;
  defaultValue?: string;
  className?: string;
};

export type DateInputProps = {
  children: ReactNode;
  onRequired?: boolean;
  onChange: (selectedDate: string) => void;
  defaultValue?: string;
};

export type TDatePickerProps = {
  onChange: (formattedData: string) => void;
  defaultValue?: string;
};

export type ImageInputProps = {
  children: ReactNode;
  onChange: (uploadImgUrl: string) => void;
  columnid: number;
};

export type TMember = {
  id: number;
  email: string;
  nickname: string;
  profileImageUrl: null;
  createdAt: string;
  updatedAt: string;
  isOwner: boolean;
  userId: number;
};

export type SelectProps = {
  currentColumn?: TColumn;
  currentAssignee?: string;
  columns?: TColumn[];
  members?: TMember[];
  onType: boolean;
  onChangeColumn?: (id: number) => void;
  onChangeAssignee?: (id: number) => void;
  onChangeIsEdited?: () => void;
  isEdited?: boolean;
};

export type SelectBoxProps = {
  children: ReactNode;
  currentColumn?: TColumn;
  currentAssignee?: string;
  columns?: TColumn[];
  members?: TMember[];
  onType: boolean;
  onChangeColumn?: (id: number) => void;
  onChangeAssignee?: (id: number) => void;
};

export type TagInputProps = {
  children: ReactNode;
  id: string;
  type: string;
  placeholder: string;
  onRequired?: boolean;
  onChange: (tagArr: string[]) => void;
  defaultValue?: string[];
};

export type ModalInputProps = {
  children: ReactNode;
  id: string;
  type: string;
  placeholder: string;
  onRequired?: boolean;
  onChange?: (title: string) => void;
  defaultValue?: string;
};
