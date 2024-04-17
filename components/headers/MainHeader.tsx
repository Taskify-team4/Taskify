import Header from './Header';
import * as S from './MainHeader.style';
import logoImg from '@public/icons/logo_img.svg';
import logoText from '@public/icons/logo_taskify.svg';

function MainHeader() {
  const handleLogoClick = () => {
    // 메인페이지로 이동
  };

  const handleLoginClick = () => {
    // 로그인페이지로 이동
  };

  const handleSignUpClick = () => {
    // 회원가입 페이지로 이동
  };

  return (
    <Header>
      <S.LogoContainer onClick={handleLogoClick}>
        <S.LogoImg src={logoImg} alt="로고 이미지" />
        <S.LogoText src={logoText} alt="로고 Text" />
      </S.LogoContainer>

      <S.ButtonContainer>
        <S.Button onClick={handleLoginClick}>로그인</S.Button>
        <S.Button onClick={handleSignUpClick}>회원가입</S.Button>
      </S.ButtonContainer>
    </Header>
  );
}

export default MainHeader;
