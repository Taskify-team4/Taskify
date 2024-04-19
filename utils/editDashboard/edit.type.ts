import { TColorCode } from '@components/chips/Chip.type';
import { User } from '@utils/testData';
import { dashboard } from '@components/sidemenu/Sidemenu.type';

export type DashBoardNameData = { title: string; color: TColorCode };

export type DashBoardMember = {
  id: number;
  userId: number;
  nickname: string;
  email?: string;
  profileImageUrl: string | null;
  isOwner: boolean;
};

export type Invitations = {
  id: number;
  invitee: User;
};

export type PagenationInfo = {
  current: number;
  limit: number;
};

export type EditPageProps = {
  dashboardData: DashBoardNameData;
  invitees: Invitations[];
  totalInvitees: number;
  members: DashBoardMember[];
  totalMembers: number;
  myData: DashBoardMember;
  dashboardList: dashboard[];
};
