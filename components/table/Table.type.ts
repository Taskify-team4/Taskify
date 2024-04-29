import { Dispatch, ReactNode, SetStateAction } from 'react';
import { DashBoardMember, PagenationInfo } from '@pages/dashboard/[dashboardId]/edit.type';

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

type TInvitationIdAndInvitee = Pick<TInvitation, 'id' | 'invitee'>;
export type InvitedDashListProps = {
  data: TInvitationIdAndInvitee[];
  buttonText?: string;
  onCancelInviteClick?: (cancelId: number) => void;
  IsObserverEnd?: IsEndStateObject | undefined;
  onConfirmClick?: (id: number) => void;
  onRejectClick?: (id: number) => void;
};
type IsEndStateObject = {
  cursorId: number | undefined;
  setCursorId: Dispatch<SetStateAction<number | undefined>>;
};
