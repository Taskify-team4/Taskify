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

export type TCardForm = {
  assigneeUserId: number;
  dashboardId: number;
  columnId: number;
  title: string;
  description: string;
  dueDate: string;
  tags: string[];
  imageUrl?: string;
};

export type TCard = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  dueDate: string;
  assignee: {
    profileImageUrl: string;
    nickname: string;
    id: number;
  };
  imageUrl: string;
  teamId: string;
  columnId: number;
  createdAt: string;
  updatedAt: string;
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

export type TCommentForm = {
  content: string;
  cardId: number;
  columnId: number;
  dashboardId: number;
};

export type TComment = {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  cardId: number;
  author: {
    profileImageUrl: string;
    nickname: string;
    id: number;
  };
};
