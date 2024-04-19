import { TColorCode } from '@components/chips/Chip.type';
import { User } from '@utils/testData';

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
