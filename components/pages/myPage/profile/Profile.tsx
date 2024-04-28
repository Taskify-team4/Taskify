import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import * as S from '@components/pages/myPage/profile/Profile.style';
import addIcon from '@public/icons/add_violet.svg';
import TextInput from '@components/inputs/textInput/TextInput';
import Image from 'next/image';
import { upLoadImg, putMyData } from '@utils/api';
import { useMyData } from '@contexts/myDataContext';
import { BackdropContainer } from '@components/modals/Modal';
import ModalBase from '@components/modals/ModalBase';
import PasswordModal from '@components/modals/inconsistent_password/Modal';

function Profile() {
  const { myData, updateNickname, updateImg } = useMyData();
  const [nickName, setNickName] = useState('');
  const [profileImgUrl, setProfileImgUrl] = useState('');
  const [previewImg, setPreviewImg]: any = useState('');
  const [isChangeImg, setIsChangeImg] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [message, setMessage] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);

  const profileInputList = [
    { id: 'email', placeholder: myData.email, label: '이메일', disabled: true },
    { id: 'nickname', placeholder: myData.nickname, label: '닉네임', disabled: false },
  ];

  // 내 정보 수정
  const handleModifyMyDataClick = async () => {
    let res = '';
    if (nickName && profileImgUrl) {
      res = await putMyData(nickName, profileImgUrl);
      updateNickname(nickName);
      updateImg(profileImgUrl);
    } else if (nickName) {
      res = await putMyData(nickName);
      updateNickname(nickName);
    } else {
      res = await putMyData(myData.nickname, profileImgUrl);
      updateImg(profileImgUrl);
    }

    setOpenModal(true);
    setMessage(res);
    setIsChangeImg(false);
  };

  // 파일 입력창 열기
  const handleImageClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  // 미리보기
  const PreviewImg = (file: any) => {
    const preview = new FileReader();
    preview.onload = function (e) {
      const imageDataURL = e.target?.result as string;
      // setPreviewImg(imageDataURL);
      updateImg(imageDataURL);
    };
    preview.readAsDataURL(file);
  };

  // 인풋 파일 업로드 감지
  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    // 미리보기 이미지 설정
    PreviewImg(file);
    setIsChangeImg(true);

    // 이미지 업로드 및 url 획득
    upLoadImg(file).then((profileImageUrl) => {
      setProfileImgUrl(profileImageUrl);
    });
  };

  useEffect(() => {
    setPreviewImg(myData.profileImageUrl);
    console.log(nickName, myData.nickname);
  }, [myData.profileImageUrl, myData.nickname, openModal, message, nickName]);

  return (
    <S.MyPageProfileContainer>
      <S.MyPageProfileTitle>프로필</S.MyPageProfileTitle>
      <S.MyPageProfileInfoContainer>
        <S.MyPageProfileInfo>
          <S.ImgUpLoad type="file" accept="image/*" ref={inputRef} onChange={handleChange} />
          {previewImg ? (
            <S.PreviewImg src={previewImg} alt="미리보기" onClick={handleImageClick} />
          ) : (
            <S.MyPageProfileWrap onClick={handleImageClick}>
              <S.MyPageProfileImgContent>
                <Image fill src={addIcon.src} alt="addIcon" />
              </S.MyPageProfileImgContent>
            </S.MyPageProfileWrap>
          )}
        </S.MyPageProfileInfo>
        <S.MyPageProfileInputContainer>
          {profileInputList.map((inputItem) => (
            <TextInput
              key={inputItem.id}
              id={inputItem.id}
              placeholder={inputItem.placeholder}
              disabled={inputItem.disabled}
              onChange={setNickName}
              nickname={nickName}
            >
              {inputItem.label}
            </TextInput>
          ))}
        </S.MyPageProfileInputContainer>
      </S.MyPageProfileInfoContainer>
      <S.MyPageBtnWrap>
        <S.MyPageBtn
          onClick={handleModifyMyDataClick}
          disabled={(nickName == '' || nickName == myData.nickname || nickName.length > 10) && !isChangeImg}
        >
          {/* <S.MyPageBtn
          onClick={handleModifyMyDataClick}
          disabled={nickName == '' || nickName == myData.nickname || nickName.length > 10}
        > */}
          저장
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
    </S.MyPageProfileContainer>
  );
}

export default Profile;
