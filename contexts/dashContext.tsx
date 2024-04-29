import { TCards, TColumn, TColumns, TDashboards, TDashInfo } from '@pages/dashboard/Dashboard.type';

import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { getCards, getColumns, getDashboardInfo, getMyDashboards, getMyData } from '@utils/api';
import { DashBoardMember } from '@utils/editDashboard/edit.type';

type ProviderProps = {
  children: ReactNode;
  dashboardId: number;
};

const initialContext = {
  dashboardId: 0,
  dashInfo: {} as TDashInfo,
  columns: [] as TColumns,
  cards: [] as TCards,
  selectedColumn: {} as TColumn,
  setSelectedColumn: (_selectedColumn: TColumn) => {},

  fetchDashboardInfo: () => {},
  fetchColumns: () => {},
  fetchCards: (_columnId: number) => {},

  myDashboards: [] as TDashboards,
  dashPage: 1,
  dashPageLimit: 1,
  myDashboardsInSideBar: [] as TDashboards,
  dashPageInSideBar: 1,
  dashPageLimitInSideBar: 1,
  fetchMyDashboards: (_inInSide?: boolean) => {},
  fetchMyDashboardsAll: () => {},
  handlePrevClick: (_inInSide?: boolean) => {},
  handleNextClick: (_inInSide?: boolean) => {},
};

const DashContext = createContext(initialContext);

export const useDashContext = () => useContext(DashContext);

export function DashProvider({ children, dashboardId }: ProviderProps) {
  const [myInfo, setMyInfo] = useState<DashBoardMember>();
  const [dashInfo, setDashInfo] = useState<TDashInfo>({
    color: '#760dde',
    createdAt: '',
    createdByMe: false,
    id: 0,
    title: '',
    updatedAt: '',
    userId: 0,
  });
  const [columns, setColumns] = useState<TColumns>([]);
  const [cards, setCards] = useState<TCards>([]);
  const [selectedColumn, setSelectedColumn] = useState<TColumn>({
    length: 0,
    id: 0,
    title: '',
    teamId: '',
    dashboardId: 0,
    createdAt: '',
  });

  // 달력 input에서 선택된 날짜 state
  const [selectedDate, setSelectedDate] = useState('');

  const fetchMyInfo = async () => {
    const res = await getMyData();
    setMyInfo(res);
  };

  const fetchDashboardInfo = async () => {
    const res = await getDashboardInfo(dashboardId.toString());
    setDashInfo(res);
  };

  const fetchColumns = async () => {
    const res: any = await getColumns(dashboardId);
    const result = res.data;
    setColumns(result);
  };

  const [myDashboards, setMyDashboards] = useState<TDashboards>([]);
  const [dashPage, setDashPage] = useState(1);
  const [dashPageLimit, setdashPageLimit] = useState(1);

  const [myDashboardsInSideBar, setMyDashboardsInSideBar] = useState<TDashboards>([]);
  const [dashPageInSideBar, setDashPageInSideBar] = useState(1);
  const [dashPageLimitInSideBar, setdashPageLimitInSideBar] = useState(1);

  const fetchMyDashboards = async (isInSide?: boolean) => {
    if (isInSide) {
      const res = await getMyDashboards(dashPageInSideBar, true);
      const result = res.dashboards;

      setMyDashboardsInSideBar(result);
      setdashPageLimitInSideBar(Math.ceil(res.totalCount / 10));
    } else {
      const res = await getMyDashboards(dashPage);
      const result = res.dashboards;

      setMyDashboards(result);
      setdashPageLimit(Math.ceil(res.totalCount / 5));
    }
  };
  const fetchMyDashboardsAll = () => {
    fetchMyDashboards(true);
    fetchMyDashboards();
  };
  const handlePrevClick = (isInSide?: boolean) => (_event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (isInSide) {
      setDashPageInSideBar((prev) => {
        if (prev > 1) return prev - 1;
        return prev;
      });
    } else {
      setDashPage((prev) => {
        if (prev > 1) return prev - 1;
        return prev;
      });
    }
  };
  const handleNextClick = (isInSide?: boolean) => (_event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (isInSide) {
      setDashPageInSideBar((prev) => {
        if (prev < dashPageLimitInSideBar) return prev + 1;
        return prev;
      });
    } else {
      setDashPage((prev) => {
        if (prev < dashPageLimit) return prev + 1;
        return prev;
      });
    }
  };
  const handleDashPageClick = async (isInSide?: boolean) => {
    if (isInSide) {
      const { dashboards: nowDashboards } = await getMyDashboards(dashPageInSideBar, true);
      setMyDashboardsInSideBar(nowDashboards);
    } else {
      const { dashboards: nowDashboards } = await getMyDashboards(dashPage);
      setMyDashboards(nowDashboards);
    }
  };

  const fetchCards = async (columnId: number) => {
    const res = await getCards(columnId);
    setCards(res);
  };
  useEffect(() => {
    fetchMyDashboardsAll();
  }, []);
  useEffect(() => {
    handleDashPageClick();
  }, [dashPage]);
  useEffect(() => {
    handleDashPageClick(true);
  }, [dashPageInSideBar]);

  useEffect(() => {
    if (!dashboardId) return;
    fetchMyInfo();
    fetchDashboardInfo();
    fetchMyDashboardsAll();
    fetchColumns();
  }, [dashboardId]);

  const values = {
    myInfo,
    dashboardId,
    dashInfo,
    columns,
    cards,
    setCards,
    selectedDate,
    setSelectedDate,
    fetchMyInfo,
    fetchDashboardInfo,
    fetchColumns,
    myDashboards,
    dashPage,
    dashPageLimit,
    myDashboardsInSideBar,
    dashPageInSideBar,
    dashPageLimitInSideBar,
    fetchMyDashboards,
    fetchMyDashboardsAll,
    handlePrevClick,
    handleNextClick,
    fetchCards,
    selectedColumn,
    setSelectedColumn,
  };

  return <DashContext.Provider value={values}>{children}</DashContext.Provider>;
}
