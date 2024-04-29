import { DashBoardMember } from '@pages/dashboard/[dashboardId]/edit.type';
import { Dispatch, SetStateAction } from 'react';

export type HeaderProps = {
  children?: React.ReactNode;
};

export type User = {
  id: number;
  nickname: string;
  email: string;
};

export type DataListProps = {
  data: User[];
};

export type ProfileProps = {
  color: string;
};

export type DashBoardPros = {
  title?: string;
  userList?: User[] | DashBoardMember[];
  crown?: boolean;
  onInviteClick?: (inviteEmail: string) => void;
  isDashboardEdited?: boolean;
  setIsDashboardEdited?: Dispatch<SetStateAction<boolean>>;
};

export type ProfileIconProps = {
  str: string;
  children?: React.ReactNode;
  className?: string;
};
