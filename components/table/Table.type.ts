import { ReactNode } from 'react';

export type User = {
  nickname: string;
  email: string;
  id: number;
};

export type HeaderProps = {
  title: string;
  isInvite?: boolean;
  isPagenation?: boolean;
};

export type TableListsProps = {
  children: ReactNode;
  title: string;
};

export type DataListProps = {
  data: User[];
  buttonText?: string;
};
