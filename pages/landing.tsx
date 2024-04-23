import React, { useEffect } from 'react';
import * as S from './landing.style';
import MainHeader from '../components/headers/MainHeader';
import LandingMain from '@components/pages/landing/LandingMain';
import LandingBody from '@components/pages/landing/LandingBody';
import LandingFooter from '@components/pages/landing/LandingFooter';
import AOS from 'aos';
import 'aos/dist/aos.css';

function landing() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <S.Landing>
      <MainHeader />
      <LandingMain />
      <LandingBody />
      <LandingFooter />
    </S.Landing>
  );
}

export default landing;