import { ReactNode } from 'react';
import { DashBoardMember, Invitations, PagenationInfo } from '@utils/editDashboard/edit.type';

export type HeaderProps = {
  title: string;
  isInvite?: boolean;
  isPagenation?: boolean;
  onInviteClick?: (inviteEmail: string) => void;
  onNextClick?: () => void;
  onPreviousClick?: () => void;
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
  onDeleteClick?: (deleteId: number) => void;
};

export type InvitedDashListProps = {
  data: Invitations[];
  buttonText?: string;
  onCancelInviteClick?: (cancelId: number) => void;
};
