import React, { ReactNode, useState } from 'react';
import * as S from '@components/modals/createtodo/Modal.style';
import SelectBox from '@components/inputs/modalInput/selectBox/SelectBox';
import ModalInput from '@components/inputs/modalInput/ModalInput';
import CommentInput from '@components/inputs/modalInput/commentInput/CommentInput';
import DateInput from '@components/inputs/modalInput/dateInput/DateInput';
import TagInput from '@components/inputs/modalInput/tagInput/TagInput';
import ImageInput from '@components/inputs/modalInput/imageInput/ImageInput';
import Button from '@components/buttons/Button';
import { TCard } from '@pages/dashboard/Dashboard.type';
import { ModalBaseProps } from '../Modal.type';
import { useDashContext } from '@contexts/dashContext';
import { postNewCard } from '@pages/dashboard/api';

type CreateToDoPorps = ModalBaseProps & {
  children: ReactNode;
  onModify?: boolean;
  columnid: number;
  fetchCards: (columnid: number) => {};
};
const test = ['가나다', '라마바'];

function CreateToDoModal({ children, onModify, columnid, close, fetchCards }: CreateToDoPorps) {
  const { myInfo, dashboardId } = useDashContext();

  const [cardData, setCardData] = useState<TCard>({
    //임시로 본인의 아이디만 넣도록 구현
    assigneeUserId: myInfo.id,
    dashboardId: Number(dashboardId),
    columnId: Number(columnid),
    title: '',
    description: '',
    dueDate: '',
    tags: [],
  });

  const trigger = () => {
    return close && close();
  };

  const handleChangeTitle = (title: string) => {
    setCardData((prevState) => ({
      ...prevState,
      title: title,
    }));
  };

  const handleChangeDescription = (description: string) => {
    setCardData((prevState) => ({
      ...prevState,
      description: description,
    }));
  };

  const handleChangeDueDate = (selectedDate: string) => {
    setCardData((prevState) => ({
      ...prevState,
      dueDate: selectedDate,
    }));
  };

  const handleCreateNewCard = async () => {
    try {
      const res = await postNewCard(cardData);
      if (res.id) {
        trigger();
        fetchCards(columnid);
      }
    } catch (error) {
      console.error('카드 생성 실패', error);
    }
  };

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
          <SelectBox onData={test} onType onModify>
            담당자
          </SelectBox>
        </S.CreateToDoSelectContainer>
        <ModalInput id="title" type="text" placeholder="제목을 입력해 주세요." onRequired onChange={handleChangeTitle}>
          제목
        </ModalInput>
        <CommentInput placeholder="설명을 입력해 주세요." onRequired onModal onChange={handleChangeDescription}>
          설명
        </CommentInput>
        <DateInput onChange={handleChangeDueDate}>마감일</DateInput>
        <TagInput id="tag" type="text" placeholder="입력 후 Enter">
          태그
        </TagInput>
        <ImageInput>이미지</ImageInput>
      </S.CreateToDoInputContainer>
      <S.CreateToDoBtnContainer>
        <Button.ModalReject onClick={trigger}>취소</Button.ModalReject>
        <Button.ModalConfirm onClick={handleCreateNewCard}>확인</Button.ModalConfirm>
      </S.CreateToDoBtnContainer>
    </S.CreateToDoContainer>
  );
}

export default CreateToDoModal;
