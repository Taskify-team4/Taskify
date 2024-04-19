import { ReactNode } from 'react';
import { DashBoardMember, Invitations, PagenationInfo } from '@utils/editDashboard/edit.type';

export type HeaderProps = {
  title: string;
  isInvite?: boolean;
  isPagenation?: boolean;
  onInviteClick?: any;
  onNextClick?: any;
  onPreviousClick?: any;
  pageInfo?: PagenationInfo;
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
