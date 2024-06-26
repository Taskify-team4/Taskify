import { MouseEventHandler, ReactNode } from 'react';
import { TDashInfo } from '@components/pages/dashboard/Dashboard.type';

export type DashboardData = {
  color: string;
  createdAt: string;
  createdByMe: boolean;
  id: number;
  title: string;
  updatedAt: string;
  userId: number;
};

export type ButtonProps = {
  children?: ReactNode;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  onConfirmClick?: (id: number) => void;
};

export type DashboardButtonProps = ButtonProps & {
  dashboardData: TDashInfo;
};
