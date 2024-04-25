import { Dispatch, ReactNode, SetStateAction } from 'react';
import { DashBoardMember, Invitations, PagenationInfo } from '@utils/editDashboard/edit.type';
import { ChangeHandler } from './invitedDash/InvitedDashTable';

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

export type InvitedDashListProps = {
  data: TInvitation[];
  buttonText?: string;
  onCancelInviteClick?: (cancelId: number) => void;
  IsObserverEnd?: IsEndStateObject | undefined;
  onConfirmClick?: (id: number) => void;
  onRejectClick?: (id: number) => void;
  onSearchInvitation?: ChangeHandler;
};
type IsEndStateObject = {
  cursorId: number | undefined;
  setCursorId: Dispatch<SetStateAction<number | undefined>>;
};
