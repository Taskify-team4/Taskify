import { TCards, TColumns, TDashInfo, TDashboards } from '@pages/dashboard/Dashboard.type';
import { getCards, getColumns, getDashboardInfo, getDashboards, getMyInfo } from '@pages/dashboard/api';
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
  cards: [] as TCards,

  fetchDashboardInfo: () => {},
  fetchDashboards: () => {},
  fetchColumns: () => {},
  fetchCards: (columnId: number) => {},

  myDashboards: [] as TDashboards,
  dashPage: 1,
  dashPageLimit: 1,
  fetchDashboardsPagination: () => {},
  handlePrevClick: () => {},
  handleNextClick: () => {},
};

const DashContext = createContext(initialContext);

export const useDashContext = () => useContext(DashContext);

export function DashProvider({ children, dashboardId }: ProviderProps) {
  const [myInfo, setMyInfo] = useState();
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
  const [cards, setCards] = useState<TCards>([]);

  // 달력 input에서 선택된 날짜 state
  const [selectedDate, setSelectedDate] = useState('');

  const fetchMyInfo = async () => {
    const res = await getMyInfo();
    setMyInfo(res);
  };

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
    const result = res?.data;
    setColumns(result);
  };

  const [myDashboards, setMyDashboards] = useState<TDashboards>([]);
  const [dashPage, setDashPage] = useState(1);
  const [dashPageLimit, setdashPageLimit] = useState(1);
  const fetchDashboardsPagination = async () => {
    const res = await getMyDashboardsByPagination(dashPage);
    const result = res.dashboards;

    setMyDashboards(result);
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
    setMyDashboards(nowDashboards);
  };
  
  const fetchCards = async (columnId: number) => {
    const res = await getCards(columnId);
    const result = res?.cards;
    setCards(result);
  };
  useEffect(() => {
    fetchDashboardsPagination();
  }, []);
  useEffect(() => {
    handleDashPageClick();
  }, [dashPage]);

  useEffect(() => {
    if (!dashboardId) return;
    fetchMyInfo();
    fetchDashboardInfo();
    fetchDashboards();
    fetchColumns();
  }, [dashboardId]);

  const values = {
    myInfo,
    dashboardId,
    dashInfo,
    dashboards,
    columns,
    cards,
    setCards,
    selectedDate,
    setSelectedDate,
    fetchMyInfo,
    fetchDashboardInfo,
    fetchDashboards,
    fetchColumns,
    myDashboards,
    dashPage,
    dashPageLimit,
    fetchDashboardsPagination,
    handlePrevClick,
    handleNextClick,
    fetchCards,
  };

  return <DashContext.Provider value={values}>{children}</DashContext.Provider>;
}
