import * as S from './DashBoardHeader.style';
import ProfileIconContainer from '../profileIcon/ProfileIconContainer';
import ProfileIcon from '@components/profileIcon/ProfileIcon';
import { DashBoardPros } from './Header.type';
import settingIcon from '@public/icons/setting.svg';
import addIcon from '@public/icons/add.svg';
import crownIcon from '@public/icons/crown.svg';
import ModalBase from '@components/modals/ModalBase';
import InviteModal from '@components/modals/edit_dashboard/InviteModal';
import Modal from '@components/modals/Modal';
import React from 'react';
import { useRouter } from 'next/router';
import { useDashContext } from '@contexts/dashContext';

function DashBoardHeader({ mydata, userList, onInviteClick }: DashBoardPros) {
  const { dashInfo } = useDashContext();

  const router = useRouter();
  // 세팅페이지 이동
  const handleSettingClick = () => {
    const dashboardId = router.query['dashboardId'];
    router.push(`/dashboard/${dashboardId}/edit`);
  };

  //
  const handleAddClick = () => {};

  return (
    <S.DashBoardHeader>
      <S.DashBoardTitle>
        <S.Title>{dashInfo.title}</S.Title>
        {dashInfo.createdByMe ? <S.CrownIcon src={crownIcon} alt="왕관 아이콘" /> : null}
      </S.DashBoardTitle>
      <S.ManagementContainer>
        <S.Buttons>
          <S.Button onClick={handleSettingClick}>
            <S.Icon src={settingIcon} alt="관리 아이콘" />
            관리
          </S.Button>
          <Modal
            content={
              <ModalBase>
                {/* 모달 content */}
                <InviteModal onInviteClick={onInviteClick} />
              </ModalBase>
            }
          >
            <S.Button onClick={handleAddClick}>
              <S.Icon src={addIcon} alt="추가 아이콘" />
              초대하기
            </S.Button>
          </Modal>
        </S.Buttons>
        <ProfileIconContainer data={userList} />
        <S.Line />
        <S.Profile>
          <ProfileIcon str={mydata.nickname} />
          <S.MyProfileName>{mydata.nickname}</S.MyProfileName>
        </S.Profile>
      </S.ManagementContainer>
    </S.DashBoardHeader>
  );
}

export default DashBoardHeader;
