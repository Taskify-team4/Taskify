import { TColumns, TDashInfo, TDashboards } from '@pages/dashboard/Dashboard.type';
import { getColumns, getDashboardInfo, getDashboards } from '@pages/dashboard/api';
import { useRouter } from 'next/router';
import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react';

type ProviderProps = {
  children: ReactNode;
  dashboardId: number;
};

const initialContext = {
  dashboardId: 0,
  dashInfo: {} as TDashInfo,
  dashboards: [] as TDashboards,
  columns: [] as TColumns,
  fetchDashboardInfo: () => {},
  fetchDashboards: () => {},
  fetchColumns: () => {},
};

const DashContext = createContext(initialContext);

export const useDashContext = () => useContext(DashContext);

export function DashProvider({ children, dashboardId }: ProviderProps) {
  const [dashInfo, setDashInfo] = useState<TDashInfo>({
    color: '',
    createdAt: '',
    createdByMe: false,
    id: 0,
    title: '',
    updatedAt: '',
    userId: 0,
  });
  const [dashboards, setDashboards] = useState<TDashboards>([]);
  const [columns, setColumns] = useState<TColumns>([]);

  const fetchDashboardInfo = async () => {
    const res = await getDashboardInfo(dashboardId);
    setDashInfo(res);
  };

  const fetchDashboards = async () => {
    const res = await getDashboards();
    const result = res.dashboards;
    setDashboards(result);
  };

  const fetchColumns = async () => {
    const res = await getColumns(dashboardId);
    const result = res.data;
    setColumns(result);
  };

  useEffect(() => {
    if (!dashboardId) return;
    fetchDashboardInfo();
    fetchDashboards();
    fetchColumns();
  }, [dashboardId]);

  const values = {
    dashboardId,
    dashInfo,
    dashboards,
    columns,
    fetchDashboardInfo,
    fetchDashboards,
    fetchColumns,
  };

  return <DashContext.Provider value={values}>{children}</DashContext.Provider>;
}
