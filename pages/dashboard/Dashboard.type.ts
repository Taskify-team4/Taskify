export type TColumn = {
  id: number;
  title: string;
  teamId: string;
  dashboardId: number;
  createdAt: string;
};

export type TColumns = TColumn[];

export type TDashInfo = {
  color: string;
  createdAt: string;
  createdByMe: boolean;
  id: number;
  title: string;
  updatedAt: string;
  userId: number;
};

export type TDashboards = TDashInfo[];

export type TColumnForm = { title: string; dashboardId: number };

export type TColumnTitleChange = { title: string; dashboardId: number };

export type TCard = {
  assigneeUserId: number;
  dashboardId: number;
  columnId: number;
  title: string;
  description: string;
  dueDate: string;
  tags: string[];
};

export type TCards = TCard[];

export type TMyInfo = {
  id: number;
  email: string;
  nickname: string;
  profileImageUrl: string | null;
  createdAt: string;
  updatedAt: string;
};
