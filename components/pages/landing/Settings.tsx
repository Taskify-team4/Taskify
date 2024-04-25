import React from 'react';
import * as S from './Settings.style';
import setting1 from '@public/images/setting1.png';
import setting2 from '@public/images/setting2.png';
import setting3 from '@public/images/setting3.png';

function Settings() {
  return (
    <S.Settings>
      <S.SettingTitle>생산성을 높이는 다양한 설정 ⚡</S.SettingTitle>
      <S.Card1 img={setting1} title="대시보드 설정" description="대시보드 사진과 이름을 변경할 수 있어요" />
      <S.Card2 img={setting2} title="초대" description="새로운 팀원을 초대할 수 있어요" />
      <S.Card3 img={setting3} title="구성원" description="구성원을 초대하고 내보낼 수 있어요" />
    </S.Settings>
  );
}

export default Settings;
