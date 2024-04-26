// 현재 접속한 유저 데이터
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { DashBoardMember } from '@utils/editDashboard/edit.type';
import { getMyData } from '@utils/api';

type MyDataContextType = {
  myData: DashBoardMember;
};

const MyDataContext = createContext<MyDataContextType | undefined>(undefined);

export const MyDataProvider = ({ children }: { children: ReactNode }) => {
  const [myData, setMyData] = useState<DashBoardMember>({
    id: 0,
    userId: 0,
    nickname: '',
    email: '',
    profileImageUrl: null,
    isOwner: false,
  });
  const fetchData = async () => {
    const myNewData = await getMyData();
    setMyData(myNewData);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return <MyDataContext.Provider value={{ myData }}>{children}</MyDataContext.Provider>;
};

export const useMyData = () => {
  const context = useContext(MyDataContext);
  if (!context) {
    throw new Error('Context 안에서만 사용할 수 있습니다.');
  }
  return context;
};
