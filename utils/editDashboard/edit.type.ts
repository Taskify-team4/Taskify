import { TColorCode } from '@components/chips/Chip.type';

export type DashBoardNameData = { title: string; color: TColorCode };

export type DashBoardMember = {
  id: number;
  userId: number;
  nickname: string;
  email?: string;
  profileImageUrl: string | null;
  isOwner: boolean;
};