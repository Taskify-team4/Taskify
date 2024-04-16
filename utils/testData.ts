export type User = {
  id: number;
  nickname: string;
  email: string;
};

export const USER_LIST: User[] = [
  {
    id: 1,
    nickname: '정만철',
    email: 'codeitA@codeit.com',
  },
  {
    id: 2,
    nickname: '김태순',
    email: 'codeitB@codeit.com',
  },
  {
    id: 3,
    nickname: '최주협',
    email: 'codeitC@codeit.com',
  },
  {
    id: 4,
    nickname: '윤지현',
    email: 'codeitD@codeit.com',
  },
];

export type Invitation = {
  id: number;
  inviter: {
    nickname: string;
  };
  dashboard: {
    title: string;
  };
};

export const INVITATION_LIST: Invitation[] = [
  {
    id: 0,
    inviter: {
      nickname: '손동희',
    },
    dashboard: {
      title: '프로덕트 디자인',
    },
  },
  {
    id: 1,
    inviter: {
      nickname: '안귀영',
    },
    dashboard: {
      title: '새로운 기획 문서',
    },
  },
  {
    id: 2,
    inviter: {
      nickname: '장혁',
    },
    dashboard: {
      title: '유닛 A',
    },
  },
];
