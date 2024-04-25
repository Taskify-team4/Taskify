import * as S from './ProfileIconContainer.style';
import { DataListProps } from '../headers/Header.type';
import size from '@constants/breakpointsSize';
import ProfileIcon from './ProfileIcon';
import useWindowSize from '@hooks/useWindowSize';

function ProfileIconContainer({ data }: DataListProps) {
  const { windowWidth } = useWindowSize();

  return (
    <S.ProfileIconContainer>
      {windowWidth > size.tablet
        ? data?.slice(0, 4).map((item) => <ProfileIcon key={item.id} str={item.nickname} />)
        : data?.slice(0, 3).map((item) => <ProfileIcon key={item.id} str={item.nickname} />)}
      {windowWidth > size.tablet && data?.length > 4 && <S.ProfileIconCnt>+{data?.length - 4}</S.ProfileIconCnt>}
      {windowWidth <= size.tablet && data?.length > 3 && <S.ProfileIconCnt>+{data?.length - 3}</S.ProfileIconCnt>}
    </S.ProfileIconContainer>
  );
}

export default ProfileIconContainer;
