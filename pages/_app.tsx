import type { AppProps } from 'next/app';
import '@styles/globals.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import logosrc from '@public/icons/logo_img.svg';

export const ROUTES = [
  {
    ID: 0,
    PATH: '/',
    LABEL: '',
    DESCRIPTION: '간편하고 직관적인 방식으로 일정 관리와 프로젝트 협업을 진행해 보세요.',
  },
  {
    ID: 1,
    PATH: '/mypage',
    LABEL: 'Taskify - 마이페이지',
    DESCRIPTION: '내 정보를 수정해 보세요.',
  },
  {
    ID: 2,
    PATH: '/mydashboard',
    LABEL: 'Taskify - 내 대시보드 목록',
    DESCRIPTION: '내가 만든 대시보드와 초대받은 대시보드 목록을 관리할 수 있습니다.',
  },
  {
    ID: 3,
    PATH: '/login',
    LABEL: 'Taskify - 로그인',
    DESCRIPTION: '로그인 페이지 입니다.',
  },
  {
    ID: 4,
    PATH: '/signup',
    LABEL: 'Taskify - 회원가입',
    DESCRIPTION: '회원가입 페이지 입니다.',
  },
];

export default function App({ Component, pageProps }: AppProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const pathName = useRouter().pathname;

  useEffect(() => {
    ROUTES.map((route) => {
      if (route.PATH === pathName) {
        setTitle(`${route.LABEL}`);
        setDescription(`${route.LABEL}`);
      }
    });
  });

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <link rel="icon" type="image/png" href={logosrc.src} sizes="16x16" />
        </Helmet>
      </HelmetProvider>
      <Component {...pageProps} />
    </>
  );
}
