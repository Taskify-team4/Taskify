import React from 'react';
import * as S from '@components/pages/myPage/password/Password.style';
import PasswordInput from '@components/inputs/passwordInput/PasswordInput';

function Password() {
  const passwordInputList = [
    { id: 'password', placeholder: '현재 비밀번호 입력', label: '현재 비밀번호' },
    { id: 'newPassword', placeholder: '새 비밀번호 입력', label: '새 비밀번호' },
    { id: 'newPasswordCheck', placeholder: '새 비밀번호 입력', label: '새 비밀번호 확인' },
  ];

  return (
    <S.MyPagePasswordContainer>
      <S.MyPagePasswordTitle>비밀번호 변경</S.MyPagePasswordTitle>
      <S.MyPagePasswordInputContainer>
        {passwordInputList.map((inputItem) => (
          <PasswordInput key={inputItem.id} id={inputItem.id} placeholder={inputItem.placeholder}>
            {inputItem.label}
          </PasswordInput>
        ))}
      </S.MyPagePasswordInputContainer>
      <S.MyPageBtnWrap>
        <S.MyPageBtn>변경</S.MyPageBtn>
      </S.MyPageBtnWrap>
    </S.MyPagePasswordContainer>
  );
}

export default Password;
