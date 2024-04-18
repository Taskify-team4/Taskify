import React from 'react';
import * as S from './EditName.style';
import TextInput from '@components/inputs/textInput/TextInput';

function EditName() {
  return (
    <S.EditDashboardName>
      <S.EditNameTitle>
        <S.DashboardName>sample</S.DashboardName>
        <S.StyledColorPalette size={'large'} />
      </S.EditNameTitle>
      <TextInput id={'dashboardName'} placeholder={'비브리지'}>
        대시보드 이름
      </TextInput>
      <S.EditNameButton children={'변경'} />
    </S.EditDashboardName>
  );
}

export default EditName;
