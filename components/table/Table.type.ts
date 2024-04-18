import { User } from '@utils/testData';
import { ReactNode } from 'react';
import { DashBoardMember, Invitations } from '@utils/editDashboard/edit.type';

export type HeaderProps = {
  title: string;
  isInvite?: boolean;
  isPagenation?: boolean;
  onInviteClick?: any;
};

export type TableListsProps = {
  children: ReactNode;
  title?: string;
  isInvitedDash?: boolean;
};

export type DataListProps = {
  data: User[] | DashBoardMember[];
  buttonText?: string;
};

export type InvitedDashListProps = {
  data: Invitations[];
  buttonText?: string;
  onCancelInviteClick?: any;
};
