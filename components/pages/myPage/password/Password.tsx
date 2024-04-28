import React, { useEffect, useState } from 'react';
import * as S from '@components/pages/myPage/password/Password.style';
import PasswordInput from '@components/inputs/passwordInput/PasswordInput';
import { changePassword } from '@utils/api';
import { BackdropContainer } from '@components/modals/Modal';
import ModalBase from '@components/modals/ModalBase';
import PasswordModal from '@components/modals/inconsistent_password/Modal';

function Password() {
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordCheck, setNewPasswordCheck] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [message, setMessage] = useState('');

  const passwordInputList = [
    {
      id: 'password',
      type: 'password',
      placeholder: '현재 비밀번호 입력',
      onChange: setPassword,
      label: '현재 비밀번호',
      password: password,
      inputValue: password,
    },
    {
      id: 'newPassword',
      type: 'password',
      placeholder: '새 비밀번호 입력',
      onChange: setNewPassword,
      label: '새 비밀번호',
      password: newPassword,
      inputValue: newPassword,
    },
    {
      id: 'newPasswordCheck',
      type: 'password',
      placeholder: '새 비밀번호 입력',
      onChange: setNewPasswordCheck,
      label: '새 비밀번호 확인',
      passwordCheck: newPasswordCheck,
      inputValue: newPasswordCheck,
    },
  ];

  const passwordCompare = () => {
    return newPassword.length !== 0 && newPassword == newPasswordCheck;
  };

  const handleChangePwdClick = async () => {
    const res = await changePassword(password, newPassword);
    setOpenModal(true);
    setMessage(res);
    setPassword('');
    setNewPassword('');
    setNewPasswordCheck('');
  };

  useEffect(() => {}, [password, newPassword, newPasswordCheck, openModal, message]);

  return (
    <S.MyPagePasswordContainer>
      <S.MyPagePasswordTitle>비밀번호 변경</S.MyPagePasswordTitle>
      <S.MyPagePasswordInputContainer>
        {passwordInputList.map((inputItem) => (
          <PasswordInput
            key={inputItem.id}
            id={inputItem.id}
            type={inputItem.type}
            placeholder={inputItem.placeholder}
            onChange={inputItem.onChange}
            password={inputItem.password}
            passwordCheck={inputItem.passwordCheck}
            passwordCompare={!passwordCompare()}
            inputValue={inputItem.inputValue}
          >
            {inputItem.label}
          </PasswordInput>
        ))}
      </S.MyPagePasswordInputContainer>
      <S.MyPageBtnWrap>
        <S.MyPageBtn
          onClick={handleChangePwdClick}
          disabled={password.length < 8 || newPassword.length < 8 || !passwordCompare()}
        >
          변경
        </S.MyPageBtn>
      </S.MyPageBtnWrap>
      {openModal ? (
        <BackdropContainer>
          <ModalBase
            close={() => {
              setOpenModal((prev) => !prev);
              setMessage('');
            }}
          >
            <PasswordModal errorMsg={message} />
          </ModalBase>
        </BackdropContainer>
      ) : (
        <></>
      )}
    </S.MyPagePasswordContainer>
  );
}

export default Password;
