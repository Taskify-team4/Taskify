import { ReactNode } from 'react';
import { DashBoardMember, Invitations } from '@utils/editDashboard/edit.type';

export type HeaderProps = {
  title: string;
  isInvite?: boolean;
  isPagenation?: boolean;
  onInviteClick?: any;
  onNextClick?: any;
  onPreviousClick?: any;
  pageInfo?: { current: number; limit: number };
};

export type TableListsProps = {
  children: ReactNode;
  title?: string;
  isInvitedDash?: boolean;
};

export type DataListProps = {
  data: DashBoardMember[];
  buttonText?: string;
  onDeleteClick?: any;
};

export type InvitedDashListProps = {
  data: Invitations[];
  buttonText?: string;
  onCancelInviteClick?: any;
};
