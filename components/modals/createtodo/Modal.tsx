import React from 'react';
import * as S from '@components/modals/createtodo/Modal.style';
import SelectBox from '@components/inputs/modalInput/selectBox/SelectBox';
import ModalInput from '@components/inputs/modalInput/ModalInput';
import CommentInput from '@components/inputs/modalInput/commentInput/CommentInput';
import DateInput from '@components/inputs/modalInput/dateInput/DateInput';
import TagInput from '@components/inputs/modalInput/tagInput/TagInput';
import ImageInput from '@components/inputs/modalInput/imageInput/ImageInput';
import Button from '@components/buttons/Button';

function CreateToDoModal({ children }: any) {
  const test = ['가나다', '라마바'];
  return (
    <S.CreateToDoContainer>
      <S.CreateToDoTitle>{children}</S.CreateToDoTitle>
      <S.CreateToDoInputContainer>
        <SelectBox onData={test} onType={true}>
          담당자
        </SelectBox>
        <ModalInput id="title" type="text" placeholder="제목을 입력해 주세요." onRequired={true}>
          제목
        </ModalInput>
        <CommentInput placeholder="설명을 입력해 주세요." onRequired={true} onModal={true}>
          설명
        </CommentInput>
        <DateInput>마감일</DateInput>
        <TagInput id="tag" type="text" placeholder="입력 후 Enter">
          태그
        </TagInput>
        <ImageInput>이미지</ImageInput>
      </S.CreateToDoInputContainer>
      <S.CreateToDoBtnContainer>
        <Button.ModalReject>취소</Button.ModalReject>
        <Button.ModalConfirm>확인</Button.ModalConfirm>
      </S.CreateToDoBtnContainer>
    </S.CreateToDoContainer>
  );
}

export default CreateToDoModal;
