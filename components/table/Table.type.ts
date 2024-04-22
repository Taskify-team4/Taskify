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

export type TInvitation = {
  id: number;
  inviter: {
    nickname: string;
    email: string;
    id: number;
  };
  teamId: string;
  dashboard: {
    title: string;
    id: number;
  };
  invitee: {
    nickname: string;
    email: string;
    id: number;
  };
  inviteAccepted: boolean;
  createdAt: string;
  updatedAt: string;
};

export type InvitedDashListProps = {
  data: TInvitation[];
  buttonText?: string;
  onCancelInviteClick?: any;
};
