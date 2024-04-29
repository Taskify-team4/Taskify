import * as S from './Header.style';
import { HeaderProps } from './Header.type';

function Header({ children }: HeaderProps) {
  return (
    <>
      <S.Header> {children} </S.Header>
    </>
  );
}

export default Header;
