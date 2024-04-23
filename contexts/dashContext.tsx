import { TColumns, TDashInfo, TDashboards } from '@pages/dashboard/Dashboard.type';
import { getColumns, getDashboardInfo, getDashboards } from '@pages/dashboard/api';
import { useRouter } from 'next/router';
import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { getMyDashboardsByPagination } from '@pages/mydashboard/api';

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
  //
  Pdashboards: [] as TDashboards,
  dashPage: 1,
  dashPageLimit: 1,
  fetchDashboardsPagination: () => {},
  handlePrevClick: () => {},
  handleNextClick: () => {},
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

  const [Pdashboards, setPDashboards] = useState<TDashboards>([]);
  const [dashPage, setDashPage] = useState(1);
  const [dashPageLimit, setdashPageLimit] = useState(1);
  const fetchDashboardsPagination = async () => {
    const res = await getMyDashboardsByPagination(dashPage);
    const result = res.dashboards;

    setPDashboards(result);
    setdashPageLimit(Math.ceil(res.totalCount / 5));
  };
  const handlePrevClick = () => {
    setDashPage((prev) => {
      if (prev > 1) return prev - 1;
      return prev;
    });
  };
  const handleNextClick = () => {
    setDashPage((prev) => {
      if (prev < dashPageLimit) return prev + 1;
      return prev;
    });
  };
  const handleDashPageClick = async () => {
    const { dashboards: nowDashboards } = await getMyDashboardsByPagination(dashPage);
    console.log(nowDashboards);
    setPDashboards(nowDashboards);
  };
  useEffect(() => {
    fetchDashboardsPagination();
  }, []);
  useEffect(() => {
    handleDashPageClick();
  }, [dashPage]);

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
    //
    Pdashboards,
    dashPage,
    dashPageLimit,
    fetchDashboardsPagination,
    handlePrevClick,
    handleNextClick,
  };

  return <DashContext.Provider value={values}>{children}</DashContext.Provider>;
}
