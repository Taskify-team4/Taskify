import Button from '@components/buttons/Button';
import Card from '@components/cards/Card';
import React, { useEffect, useState } from 'react';
import * as S from '@components/pages/dashboard/Column.style';
import { ColorTile } from '@components/chips/Chip.style';
import Image from 'next/image';
import settingIcon from '@public/icons/setting.svg';
import Modal, { BackdropContainer } from '@components/modals/Modal';
import ModalBase from '@components/modals/ModalBase';
import ModalTask from '@components/modals/modal-task/ModalTask';
import EditColumnModal from '@components/modals/edit_column/Modal';
import { TCards, TColumn } from '@pages/dashboard/Dashboard.type';
import CreateToDoModal from '@components/modals/createtodo/Modal';
import { getCards } from '@utils/api';

type TColumnProps = {
  column: TColumn;
};

function Column({ column, onChangeIsEdited }: TColumnProps) {
  const [cards, setCards] = useState<TCards>([]);
  const [editId, setEditId] = useState(0);

  const fetchCards = async (id: number) => {
    const res = await getCards(id);
    setCards(res);
  };

  useEffect(() => {
    fetchCards(column.id);
  }, []);

  return (
    <S.ColumnContainer>
      <S.ColumnHeader>
        <S.TitleWrapper>
          <ColorTile $size={'tiny'} $color="purple" />
          <S.ColumnTitle>{column.title}</S.ColumnTitle>
          <S.CardsCount>{cards?.length}</S.CardsCount>
        </S.TitleWrapper>
        {/* 컬럼 설정 모달 */}
        <Modal
          content={
            <ModalBase>
              <EditColumnModal column={column} />
            </ModalBase>
          }
        >
          <S.ColumnSettingButtonWrapper>
            <Image src={settingIcon} width={24} height={24} alt="설정 아이콘" />
          </S.ColumnSettingButtonWrapper>
        </Modal>
      </S.ColumnHeader>

      {/* 할일 생성 모달 */}
      <Modal
        content={
          <ModalBase>
            <CreateToDoModal column={column} fetchCards={fetchCards}>
              할 일 생성
            </CreateToDoModal>
          </ModalBase>
        }
      >
        <Button.AddTodo />
      </Modal>

      {cards?.map((card, idx) => (
        <li key={card.id}>
          {/* 카드 모달 */}
          <Modal
            content={
              <ModalBase>
                <ModalTask card={card} column={column} fetchCards={fetchCards} onUpdateClick={setEditId} />
              </ModalBase>
            }
            key={idx}
          >
            <Card card={card} />
          </Modal>
          {editId === card.id && (
            <BackdropContainer>
              {/* 할 일 수정 모달 */}
              <ModalBase
                close={() => {
                  setEditId(0);
                }}
              >
                <CreateToDoModal
                  card={card}
                  onModify={true}
                  column={column}
                  fetchCards={fetchCards}
                  onChangeIsEdited={onChangeIsEdited}
                >
                  할 일 수정
                </CreateToDoModal>
              </ModalBase>
            </BackdropContainer>
          )}
        </li>
      ))}
    </S.ColumnContainer>
  );
}

export default Column;
