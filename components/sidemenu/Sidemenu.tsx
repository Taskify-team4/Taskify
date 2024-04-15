import * as S from '@components/sidemenu/Sidemenu.style';
import logoImg from '@public/icons/logo_img.svg';
import logoImgTaskify from '@public/icons/logo_taskify.svg';
import addBoxImg from '@public/icons/add.svg';

export default function Sidemenu() {
  return (
    <S.SidemenuContainer>
      <S.logoWrapper>
        <S.logoImg src={logoImg} alt="logo" />
        <S.logoImgTaskify src={logoImgTaskify} alt="logo Taskify" />
      </S.logoWrapper>
      <S.dashBoardsWrapper>
        <S.dashBoardsText>Dash Boards</S.dashBoardsText>
        <S.addBoxImg src={addBoxImg} alt="add box" />
      </S.dashBoardsWrapper>
    </S.SidemenuContainer>
  );
}
