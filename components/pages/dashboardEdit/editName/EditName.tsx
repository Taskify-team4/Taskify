import React from 'react';
import * as S from './EditName.style';
import TextInput from '@components/inputs/textInput/TextInput';
import { ColorTile } from '@components/chips/Chip.style';
import { TColorCode } from '@components/chips/Chip.type';

type EditNameProps = {
  isMobile: boolean;
  title: string;
  color: TColorCode | string;
  selectedColor: string;
  setSelectedColor: React.Dispatch<React.SetStateAction<string>> | React.Dispatch<React.SetStateAction<TColorCode>>;
  onClick?: () => void;
  onChange?: (value: string) => void;
};

function EditName({ isMobile, title, color, selectedColor, setSelectedColor, onClick, onChange }: EditNameProps) {
  return (
    <S.EditDashboardName>
      <S.EditNameTitle>
        <S.DashboardName>{title}</S.DashboardName>
        {isMobile ? (
          <ColorTile $size={'large'} $color={color} />
        ) : (
          <S.StyledColorPalette
            size={'large'}
            initialColor={color}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
          />
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
