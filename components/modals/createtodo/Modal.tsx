import React, { ReactNode } from 'react';
import * as S from '@components/modals/createtodo/Modal.style';
import SelectBox from '@components/inputs/modalInput/selectBox/SelectBox';
import ModalInput from '@components/inputs/modalInput/ModalInput';
import CommentInput from '@components/inputs/modalInput/commentInput/CommentInput';
import DateInput from '@components/inputs/modalInput/dateInput/DateInput';
import TagInput from '@components/inputs/modalInput/tagInput/TagInput';
import ImageInput from '@components/inputs/modalInput/imageInput/ImageInput';
import Button from '@components/buttons/Button';

type CreateToDoPorps = {
  children: ReactNode;
  onModify?: boolean;
};

function CreateToDoModal({ children, onModify }: CreateToDoPorps) {
  const test = ['가나다', '라마바'];
  return (
    <S.CreateToDoContainer>
      <S.CreateToDoTitle>{children}</S.CreateToDoTitle>
      <S.CreateToDoInputContainer>
        <S.CreateToDoSelectContainer>
          {onModify && (
            <SelectBox onData={test} onType={false}>
              상태
            </SelectBox>
          )}
          <SelectBox onData={test} onType={true} onModify={true}>
            담당자
          </SelectBox>
        </S.CreateToDoSelectContainer>
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
