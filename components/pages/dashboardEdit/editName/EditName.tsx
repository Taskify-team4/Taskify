import React from 'react';
import * as S from './EditName.style';
import TextInput from '@components/inputs/textInput/TextInput';
import { ColorTile } from '@components/chips/Chip.style';
import { TColorCode, TColorKey } from '@components/chips/Chip.type';

type EditNameProps = {
  isMobile: boolean;
  title: string;
  color: TColorKey | TColorCode;
};

function EditName({ isMobile, title, color }: EditNameProps) {
  return (
    <S.EditDashboardName>
      <S.EditNameTitle>
        <S.DashboardName>{title}</S.DashboardName>
        {isMobile ? <ColorTile $size={'large'} $color={color} /> : <S.StyledColorPalette size={'large'} />}
      </S.EditNameTitle>
      <TextInput id={'dashboardName'} placeholder={title}>
        대시보드 이름
      </TextInput>
      <S.EditNameButton children={'변경'} />
    </S.EditDashboardName>
  );
}

export default EditName;
