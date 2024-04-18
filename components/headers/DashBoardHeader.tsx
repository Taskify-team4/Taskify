import * as S from './DashBoardHeader.style';
import ProfileIconContainer from '../profileIcon/ProfileIconContainer';
import ProfileIcon from '@components/profileIcon/ProfileIcon';
import { DashBoardPros } from './Header.type';
import settingIcon from '@public/icons/setting.svg';
import addIcon from '@public/icons/add.svg';
import crownIcon from '@public/icons/crown.svg';

function DashBoardHeader({ title, mydata, userList, crown }: DashBoardPros) {
  // 세팅페이지 이동
  const handleSettingClick = () => {};

  //
  const handleAddClick = () => {};

  return (
    <S.DashBoardHeader>
      <S.DashBoardTitle>
        <S.Title>{title}</S.Title>
        {crown ? <S.CrownIcon src={crownIcon} alt="왕관 아이콘" /> : null}
      </S.DashBoardTitle>
      <S.ManagementContainer>
        <S.Buttons>
          <S.Button onClick={handleSettingClick}>
            <S.Icon src={settingIcon} alt="관리 아이콘" />
            관리
          </S.Button>
          <S.Button onClick={handleAddClick}>
            <S.Icon src={addIcon} alt="추가 아이콘" />
            초대하기
          </S.Button>
        </S.Buttons>
        <ProfileIconContainer data={userList} />
        <S.Line />
        <S.Profile>
          <ProfileIcon str={mydata.nickname} />
          <S.MyProfileName>{mydata.nickname}</S.MyProfileName>
        </S.Profile>
      </S.ManagementContainer>
    </S.DashBoardHeader>
  );
}

export default DashBoardHeader;
