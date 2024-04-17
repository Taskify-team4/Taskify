import * as S from './DashBoardHeader.style';
import setting from '@public/icons/setting.svg';
import add from '@public/icons/add.svg';

const DashBoardHeader = () => {
  return (
    <S.DashBoardHeader>
      <S.MyDashBoard>내 대시보드</S.MyDashBoard>
      <S.ManagementContainer>
        <S.Buttons>
          <S.Button>
            <S.Icon src={setting.src} alt="관리 아이콘" />
            관리
          </S.Button>
          <S.Button>
            <S.Icon src={add.src} alt="추가 아이콘" />
            초대하기
          </S.Button>
        </S.Buttons>
        <S.Line />
        <S.Profile>
          <S.ProfileIcon>B</S.ProfileIcon>
          <S.ProfileName>배유철</S.ProfileName>
        </S.Profile>
      </S.ManagementContainer>
    </S.DashBoardHeader>
  );
};

export default DashBoardHeader;
