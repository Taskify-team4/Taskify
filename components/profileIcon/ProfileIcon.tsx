import stringToColor from '@utils/stringToColor';
import * as S from './ProfileIcon.style';
import { ProfileIconProps } from '../headers/Header.type';

function ProfileIcon({ str, children, className }: ProfileIconProps) {
  return (
    <S.ProfileIcon color={stringToColor(str[0])} className={className}>
      {children ? children : str[0]}
    </S.ProfileIcon>
  );
}

export default ProfileIcon;
