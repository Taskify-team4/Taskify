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
import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { useDashContext } from '@contexts/dashContext';
import { useMyData } from '@contexts/myDataContext';
import Link from 'next/link';

function DashBoardHeader({ title, userList, onInviteClick }: DashBoardPros) {
  const { myData } = useMyData();
  const { dashInfo } = useDashContext();
  const [inMydash, setInMydash] = useState(false);
  const [viewDropdown, setViewDropdown] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  const router = useRouter();
  // 세팅페이지 이동
  const handleSettingClick = () => {
    const dashboardId = router.query['dashboardId'];
    router.push(`/dashboard/${dashboardId}/edit`);
  };

  const handleAddClick = () => {};

  const handleMydashPath = () => {
    if (router.pathname === '/mydashboard' || router.pathname === '/mypage') {
      setInMydash(true);
      console.log('mymy');
    } else {
      setInMydash(false);
    }
  };

  const handleLogoutClick = () => {
    localStorage.removeItem('accessToken');
  };

  useEffect(() => {
    handleMydashPath();

    // 외부 클릭시 드롭다운 사라짐
    const handleClickOutside = (e: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
        setViewDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [router.pathname, profileRef]);

  return (
    <S.DashBoardHeader>
      {!inMydash ? (
        <S.DashBoardTitle>
          {title ? <S.Title>{title}</S.Title> : <S.Title>{dashInfo.title}</S.Title>}
          {dashInfo.createdByMe ? <S.CrownIcon src={crownIcon} alt="왕관 아이콘" /> : null}
        </S.DashBoardTitle>
      ) : (
        <S.TitleMydash>내 대시보드</S.TitleMydash>
      )}
      <S.ManagementContainer>
        {!inMydash ? (
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
        ) : (
          <></>
        )}
        {userList ? (
          <>
            <ProfileIconContainer data={userList} />
            <S.Line />
          </>
        ) : (
          <></>
        )}

        {myData ? (
          <S.Profile
            onClick={() => {
              setViewDropdown(!viewDropdown);
            }}
          >
            <ProfileIcon str={myData.nickname} />
            <S.MyProfileName>{myData.nickname}</S.MyProfileName>
            {viewDropdown ? (
              <S.DropdownMenu>
                <S.DropdownMenuLi onClick={handleLogoutClick}>
                  <S.Li href="/">로그아웃</S.Li>
                </S.DropdownMenuLi>
                <S.DropdownMenuLi>
                  <S.Li href="/mypage">내정보</S.Li>
                </S.DropdownMenuLi>
                <S.DropdownMenuLi>
                  <S.Li href="/mydashboard">내 대시보드</S.Li>
                </S.DropdownMenuLi>
              </S.DropdownMenu>
            ) : (
              <></>
            )}
          </S.Profile>
        ) : (
          <></>
        )}
      </S.ManagementContainer>
    </S.DashBoardHeader>
  );
}

export default DashBoardHeader;
