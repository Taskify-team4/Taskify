import React from 'react';
import * as S from './EditName.style';
import TextInput from '@components/inputs/textInput/TextInput';
import { ColorTile } from '@components/chips/Chip.style';
import { TColorCode } from '@components/chips/Chip.type';

type EditNameProps = {
  isMobile: boolean;
  title: string;
  color: TColorCode | string;
  onTileClick?: (color: TColorCode) => void;
  onClick?: () => void;
  onChange?: (value: string) => void;
};

function EditName({ isMobile, title, color, onTileClick, onClick, onChange }: EditNameProps) {
  return (
    <S.EditDashboardName>
      <S.EditNameTitle>
        <S.DashboardName>{title}</S.DashboardName>
        {isMobile ? (
          <ColorTile $size={'large'} $color={color} />
        ) : (
          <S.StyledColorPalette size={'large'} onClick={onTileClick} initialColor={color} />
        )}
      </S.EditNameTitle>
      <TextInput id={'dashboardName'} placeholder={title} onChange={onChange} defaultValue={title}>
        대시보드 이름
      </TextInput>
      <S.EditNameButton children={'변경'} onClick={onClick} />
    </S.EditDashboardName>
  );
}

export default EditName;
