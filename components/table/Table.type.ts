import { Invitation, User } from '@utils/testData';
import { ReactNode } from 'react';

export type HeaderProps = {
  title: string;
  isInvite?: boolean;
  isPagenation?: boolean;
};

export type TableListsProps = {
  children: ReactNode;
  title?: string;
  isInvitedDash?: boolean;
};

export type DataListProps = {
  data: User[];
  buttonText?: string;
};

export type InvitedDashListProps = {
  data: Invitation[];
};
