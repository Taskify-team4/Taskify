import { MouseEventHandler, ReactNode } from 'react';

export type DashboardData = {
  color: string;
  title: string;
  createdByMe: boolean;
};

export type ButtonProps = {
  children?: ReactNode;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

export type DashboardButtonProps = ButtonProps & {
  dashboardData: DashboardData;
};
