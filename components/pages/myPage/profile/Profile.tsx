import React from 'react';
import * as S from '@components/pages/myPage/profile/Profile.style';
import addIcon from '@public/icons/add_violet.svg';
import TextInput from '@components/inputs/textInput/TextInput';
import Image from 'next/image';

function Profile() {
  const profileInputList = [
    { id: 'email', placeholder: 'asdf1234@naver.com', label: '이메일', disabled: true },
    { id: 'nickname', placeholder: '', label: '닉네임', disabled: false },
  ];

  return (
    <S.MyPageProfileContainer>
      <S.MyPageProfileTitle>프로필</S.MyPageProfileTitle>
      <S.MyPageProfileInfoContainer>
        <S.MyPageProfileInfo>
          <S.MyPageProfileWrap>
            <S.MyPageProfileImgContent>
              <Image fill src={addIcon.src} alt="addIcon" />
            </S.MyPageProfileImgContent>
          </S.MyPageProfileWrap>
        </S.MyPageProfileInfo>
        <S.MyPageProfileInputContainer>
          {profileInputList.map((inputItem) => (
            <TextInput
              key={inputItem.id}
              id={inputItem.id}
              placeholder={inputItem.placeholder}
              disabled={inputItem.disabled}
            >
              {inputItem.label}
            </TextInput>
          ))}
        </S.MyPageProfileInputContainer>
      </S.MyPageProfileInfoContainer>
      <S.MyPageBtnWrap>
        <S.MyPageBtn>저장</S.MyPageBtn>
      </S.MyPageBtnWrap>
    </S.MyPageProfileContainer>
  );
}

export default Profile;
