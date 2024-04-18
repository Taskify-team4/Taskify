import React from 'react';
import * as S from './EditName.style';
import TextInput from '@components/inputs/textInput/TextInput';
import { ColorTile } from '@components/chips/Chip.style';

function EditName({ isMobile }: { isMobile: boolean }) {
  return (
    <S.EditDashboardName>
      <S.EditNameTitle>
        <S.DashboardName>sample</S.DashboardName>
        {isMobile ? <ColorTile $size={'large'} $color={'green'} /> : <S.StyledColorPalette size={'large'} />}
      </S.EditNameTitle>
      <TextInput id={'dashboardName'} placeholder={'비브리지'}>
        대시보드 이름
      </TextInput>
      <S.EditNameButton children={'변경'} />
    </S.EditDashboardName>
  );
}

export default EditName;
