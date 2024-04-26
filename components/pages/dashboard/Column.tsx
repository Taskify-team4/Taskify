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

function Column({ column }: TColumnProps) {
  const [cards, setCards] = useState<TCards>([]);
  const [editId, setEditId] = useState(0);
  const fetchCards = async () => {
    const res = await getCards(column.id);
    setCards(res);
  };

  useEffect(() => {
    fetchCards();
  }, [column.id]);

  return (
    <S.ColumnContainer>
      <S.ColumnHeader>
        <S.TitleWrapper>
          <ColorTile $size={'tiny'} $color="purple" />
          <S.ColumnTitle>{column.title}</S.ColumnTitle>
          <S.CardsCount>{cards?.length}</S.CardsCount>
        </S.TitleWrapper>
        <Modal
          content={
            <ModalBase>
              <EditColumnModal columnid={column.id} />
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
            <CreateToDoModal columnid={column.id} fetchCards={fetchCards}>
              할 일 생성
            </CreateToDoModal>
          </ModalBase>
        }
      >
        <Button.AddTodo />
      </Modal>

      {cards?.map((card, idx) => (
        <>
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
              <ModalBase
                close={() => {
                  setEditId(0);
                }}
              >
                <CreateToDoModal card={card} onModify={true} columnid={column.id} fetchCards={fetchCards}>
                  할 일 수정
                </CreateToDoModal>
              </ModalBase>
            </BackdropContainer>
          )}
        </>
      ))}
    </S.ColumnContainer>
  );
}

export default Column;
