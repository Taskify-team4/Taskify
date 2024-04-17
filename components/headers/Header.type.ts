export type HeaderProps = {
  children?: React.ReactNode;
};

export type User = {
  id: number;
  nickname: string;
  email: string;
};

export type DataListProps = {
  data: User[];
};

export type ProfileProps = {
  color: string;
};

export type DashBoardPros = {
  mydata: User;
  userList: User[];
};

export type ProfileIconProps = {
  str: string;
  children?: React.ReactNode;
};