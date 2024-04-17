import * as S from './DashBoardHeader.style';
import setting from '@public/icons/setting.svg';
import add from '@public/icons/add.svg';
import ProfileIconContainer from '../profileIcon/ProfileIconContainer';
import { DashBoardPros } from './Header.type';
import ProfileIcon from '@components/profileIcon/ProfileIcon';

function DashBoardHeader({ mydata, userList }: DashBoardPros) {
  // 세팅페이지 이동
  const handleSettingClick = () => {};

  //
  const handleAddClick = () => {};

  return (
    <S.DashBoardHeader>
      <S.MyDashBoard>내 대시보드</S.MyDashBoard>
      <S.ManagementContainer>
        <S.Buttons>
          <S.Button onClick={handleSettingClick}>
            <S.Icon src={setting} alt="관리 아이콘" />
            관리
          </S.Button>
          <S.Button onClick={handleAddClick}>
            <S.Icon src={add} alt="추가 아이콘" />
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
