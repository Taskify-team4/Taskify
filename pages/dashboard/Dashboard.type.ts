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
