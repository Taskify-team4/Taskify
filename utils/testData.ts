import { CardProps } from '@components/cards/Card';
import { Dashboard } from '@components/sidemenu/Sidemenu.type';
import cardImg from '@public/images/img1.png';

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

export const DASH_DATA: Dashboard[] = [
  { color: 'blue', title: 'dahs', createdByMe: true },
  { color: 'green', title: 'asffa', createdByMe: true },
  { color: 'orange', title: 'asdweawd', createdByMe: false },
  { color: 'pink', title: 'asdasfa', createdByMe: false },
  { color: 'purple', title: 'rgdfgdfgdfgdfgf', createdByMe: false },
  { color: 'blue', title: 'qwe1', createdByMe: true },
];

export const CARD: CardProps[] = [
  {
    imageUrl: null,
    title: '새로운 일정 관리 taskify',
    tags: [
      { text: '프로젝트', color: 'blue' },
      { text: '백엔드', color: 'orange' },
    ],
    dueDate: '2022.12.31',
    assignee: { nickname: '경수' },
  },
  {
    imageUrl: null,
    title: '새로운 일정 관리 taskify',
    tags: [
      { text: '프로젝트', color: 'blue' },
      { text: '프로젝트', color: 'blue' },
    ],
    dueDate: '2022.12.31',
    assignee: { nickname: '경수' },
  },
  {
    imageUrl:
      'data:image/jpeg;base64,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',
    title: '새로운 일정 관리 taskify',
    tags: [
      { text: '프로젝트', color: 'blue' },
      { text: '프로젝트', color: 'blue' },
    ],
    dueDate: '2022.12.31',
    assignee: { nickname: '경수' },
  },
];
