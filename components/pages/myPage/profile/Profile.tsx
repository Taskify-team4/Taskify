import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import * as S from '@components/pages/myPage/profile/Profile.style';
import addIcon from '@public/icons/add_violet.svg';
import TextInput from '@components/inputs/textInput/TextInput';
import Image from 'next/image';
import { upLoadImg, putMyData } from '@utils/editDashboard/api';
import { useMyData } from '@contexts/myDataContext';

function Profile() {
  const { myData } = useMyData();
  const [nickName, setNickName] = useState(myData.nickname);
  const [profileImgUrl, setProfileImgUrl] = useState('');
  const [previewImg, setPreviewImg]: any = useState(myData.profileImageUrl);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const profileInputList = [
    { id: 'email', placeholder: 'asdf1234@naver.com', label: '이메일', disabled: true },
    { id: 'nickname', placeholder: nickName, label: '닉네임', disabled: false },
  ];

  useEffect(() => {
    setPreviewImg(myData.profileImageUrl);
    setNickName(myData.nickname);
  }, [myData.profileImageUrl, myData.nickname]);

  // 내 정보 수정
  const handleModifyMyDataClick = async () => {
    if (nickName && profileImgUrl) {
      await putMyData(nickName, profileImgUrl);
    } else if (nickName) {
      await putMyData(nickName);
    } else if (profileImgUrl) {
      await putMyData(profileImgUrl);
    }
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
      setPreviewImg(imageDataURL);
    };
    preview.readAsDataURL(file);
  };

  // 인풋 파일 업로드 감지
  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    // 미리보기 이미지 설정
    PreviewImg(file);

    // 이미지 업로드 및 url 획득
    upLoadImg(file).then((profileImageUrl) => {
      setProfileImgUrl(profileImageUrl);
    });
  };

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
        <S.MyPageBtn onClick={handleModifyMyDataClick} disabled={!nickName && !previewImg}>
          저장
        </S.MyPageBtn>
      </S.MyPageBtnWrap>
    </S.MyPageProfileContainer>
  );
}

export default Profile;
