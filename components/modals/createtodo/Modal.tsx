import React, { ReactNode, useEffect, useState } from 'react';
import * as S from '@components/modals/createtodo/Modal.style';
import SelectBox from '@components/inputs/modalInput/selectBox/SelectBox';
import ModalInput from '@components/inputs/modalInput/ModalInput';
import CommentInput from '@components/inputs/modalInput/commentInput/CommentInput';
import DateInput from '@components/inputs/modalInput/dateInput/DateInput';
import TagInput from '@components/inputs/modalInput/tagInput/TagInput';
import ImageInput from '@components/inputs/modalInput/imageInput/ImageInput';
import Button from '@components/buttons/Button';
import { TCard, TCardForm, TColumn } from '@pages/dashboard/Dashboard.type';
import { ModalBaseProps } from '../Modal.type';
import { useDashContext } from '@contexts/dashContext';
import { useMyData } from '@contexts/myDataContext';
import { getDashboardMembers, postNewCard, updateCard } from '@utils/api';
import { TMember } from '@components/inputs/modalInput/selectBox/Select';

type CreateToDoPorps = ModalBaseProps & {
  children: ReactNode;
  onModify?: boolean;
  column: TColumn;
  fetchCards: (columnId: number) => {};
  card?: TCard;
  isEdit?: boolean;
  onChangeIsEdited?: () => {};
};

function CreateToDoModal({ children, onModify, column, close, fetchCards, card, onChangeIsEdited }: CreateToDoPorps) {
  const { dashboardId, columns, fetchColumns } = useDashContext();
  const { myData: myInfo } = useMyData();
  const [members, setMembers] = useState<TMember[]>([]);
  const [selectedColumn, setSelectedColumn] = useState<TColumn>([]);
  const [cardData, setCardData] = useState<TCardForm>({
    assigneeUserId: myInfo.id,
    dashboardId: Number(dashboardId),
    columnId: Number(column?.id),
    title: card?.title || '',
    description: card?.description || '',
    dueDate: card?.dueDate || '',
    tags: card?.tags || [],
  });

  const trigger = () => {
    return close && close();
  };

  const fetchDashMembers = async () => {
    const res = await getDashboardMembers(dashboardId.toString());
    const result = res.members;
    setMembers(result);
  };

  const handleChangeAssignee = (memberId: number) => {
    setCardData((prevState) => ({
      ...prevState,
      assigneeUserId: memberId,
    }));
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

  const handleChangeTags = (tags: string[]) => {
    setCardData((prevState) => ({
      ...prevState,
      tags: tags,
    }));
  };

  const handleChangeImage = (url: string) => {
    setCardData((prevState) => ({
      ...prevState,
      imageUrl: url,
    }));
  };

  const handleChangeColumn = (id: number) => {
    setCardData((prevState) => ({
      ...prevState,
      columnId: id,
    }));
  };

  const handleCreateNewCard = async () => {
    try {
      const res = await postNewCard(cardData);
      if (res?.id) {
        trigger();
        fetchCards(column?.id);
      }
    } catch (error) {
      console.error('카드 생성 실패', error);
    }
  };

  const handleUpdateCard = async () => {
    try {
      const res = await updateCard(cardData, card?.id);
      if (res.id) {
        fetchCards(column?.id);
        trigger();
        onChangeIsEdited();
      }
    } catch (error) {
      console.error('카드 수정 실패', error);
    }
  };

  useEffect(() => {
    fetchDashMembers();
  }, []);
  return (
    <S.CreateToDoContainer>
      <S.CreateToDoTitle>{children}</S.CreateToDoTitle>
      <S.CreateToDoInputContainer>
        <S.CreateToDoSelectContainer>
          {onModify && (
            <SelectBox
              onType={false}
              currentColumn={column}
              columns={columns}
              onChangeColumn={handleChangeColumn}
              selectedColumn={selectedColumn}
              setSelectedColumn={setSelectedColumn}
            >
              상태
            </SelectBox>
          )}
          <SelectBox
            onType
            members={members}
            onChangeAssignee={handleChangeAssignee}
            currentAssignee={card?.assignee.nickname}
          >
            담당자
          </SelectBox>
        </S.CreateToDoSelectContainer>

        <ModalInput
          id="title"
          type="text"
          placeholder="제목을 입력해 주세요."
          onRequired
          onChange={handleChangeTitle}
          defaultValue={card?.title}
        >
          제목
        </ModalInput>

        <CommentInput
          placeholder="설명을 입력해 주세요."
          onRequired
          onModal
          onChange={handleChangeDescription}
          defaultValue={card?.description}
        >
          설명
        </CommentInput>

        <DateInput onChange={handleChangeDueDate} defaultValue={card?.dueDate}>
          마감일
        </DateInput>

        <TagInput
          id="tag"
          type="text"
          placeholder="입력 후 Enter"
          onChange={handleChangeTags}
          defaultValue={card?.tags}
        >
          태그
        </TagInput>

        <ImageInput onChange={handleChangeImage} columnid={column?.id}>
          이미지
        </ImageInput>
      </S.CreateToDoInputContainer>
      <S.CreateToDoBtnContainer>
        <Button.ModalReject onClick={trigger}>취소</Button.ModalReject>
        <Button.ModalConfirm onClick={onModify ? handleUpdateCard : handleCreateNewCard}>확인</Button.ModalConfirm>
      </S.CreateToDoBtnContainer>
    </S.CreateToDoContainer>
  );
}

export default CreateToDoModal;
