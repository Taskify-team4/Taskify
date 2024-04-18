import * as S from './ProfileIconContainer.style';
import { useEffect, useState } from 'react';
import { DataListProps } from '../headers/Header.type';
import size from '@constants/breakpointsSize';
import ProfileIcon from './ProfileIcon';

function ProfileIconContainer({ data }: DataListProps) {
  const [windowWidth, setWindowWidth] = useState(1920);

  // 브라우저 넓이 받아오기
  useEffect(() => {
    const resizeHandler = () => {
      setTimeout(() => {
        setWindowWidth(window.innerWidth);
      }, 500);
    };

    resizeHandler();

    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return (
    <S.ProfileIconContainer>
      {windowWidth > size.tablet
        ? data
            .slice(0, 4)
            .map((item) => <ProfileIcon key={item.id} str={item.nickname} />)
        : data
            .slice(0, 3)
            .map((item) => <ProfileIcon key={item.id} str={item.nickname} />)}
      {windowWidth > size.tablet && data.length > 4 && (
        <S.ProfileIconCnt>+{data.length - 4}</S.ProfileIconCnt>
      )}
      {windowWidth <= size.tablet && data.length > 3 && (
        <S.ProfileIconCnt>+{data.length - 3}</S.ProfileIconCnt>
      )}
    </S.ProfileIconContainer>
  );
}

export default ProfileIconContainer;
