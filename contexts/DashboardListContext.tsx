// 현재 접속한 유저가 속한 대시보드 리스트
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { getDashboardList } from '@utils/editDashboard/api';
import { Dashboard } from '@components/sidemenu/Sidemenu.type';

type DashboardListContextType = {
  dashboardList: Dashboard[];
  setDashboardList: React.Dispatch<React.SetStateAction<Dashboard[]>>;
};

const DashboardListContext = createContext<DashboardListContextType | undefined>(undefined);

export const DashboardListProvider = ({ children }: { children: ReactNode }) => {
  const [dashboardList, setDashboardList] = useState<Dashboard[]>([
    {
      title: '',
      color: 'gray',
      createdByMe: false,
    },
  ]);
  const fetchData = async () => {
    const newDashboardList = await getDashboardList();
    setDashboardList(newDashboardList);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <DashboardListContext.Provider value={{ dashboardList, setDashboardList }}>
      {children}
    </DashboardListContext.Provider>
  );
};

export const useDashboardList = () => {
  const context = useContext(DashboardListContext);
  if (!context) {
    throw new Error('Context 안에서만 사용할 수 있습니다.');
  }
  return context;
};
