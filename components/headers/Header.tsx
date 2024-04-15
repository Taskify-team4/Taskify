import * as S from './Header.style';

interface HeaderProps {
  children?: React.ReactNode;
}

const Header = ({ children }: HeaderProps) => {
  return (
    <>
      <S.Header> {children} </S.Header>
    </>
  );
};

export default Header;
