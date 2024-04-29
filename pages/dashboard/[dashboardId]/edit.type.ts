import { TColorCode } from '@components/chips/Chip.type';
import { User } from '@components/headers/Header.type';

export type DashBoardNameData = { title: string; color: TColorCode; createdByMe: boolean };

export type DashBoardMember = {
  id: number;
  userId: number;
  nickname: string;
  email: string;
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
