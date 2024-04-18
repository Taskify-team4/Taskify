export type DashBoardNameData = { title: string; color: string };

export type DashBoardMember = {
  userId: number;
  nickname: string;
  profileImageUrl: string | null;
  isOwner: boolean;
};
