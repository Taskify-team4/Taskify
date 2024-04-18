import Button from '@components/buttons/Button';
import Card from '@components/cards/Card';
import { CARD } from '@utils/testData';
import React from 'react';
import * as S from '@components/pages/dashboard/Column.style';
import { ColorTile } from '@components/chips/Chip.style';
import Image from 'next/image';
import settingIcon from '@public/icons/setting.svg';
import Modal from '@components/modals/Modal';
import ModalBase from '@components/modals/ModalBase';
import EditColumnModal from '@components/modals/edit_column/Modal';

function Column({}) {
  return (
    <S.ColumnContainer>
      <S.ColumnHeader>
        <S.TitleWrapper>
          <ColorTile $size={'tiny'} $color="purple" />
          <S.ColumnTitle>To Do</S.ColumnTitle>
          <S.CardsCount>{CARD.length}</S.CardsCount>
        </S.TitleWrapper>
        <Modal
          content={
            <ModalBase>
              <EditColumnModal />
            </ModalBase>
          }
        >
          <Image src={settingIcon} width={24} height={24} alt="설정 아이콘" />
        </Modal>
      </S.ColumnHeader>

      {/* 할일 생성 모달 */}
      <Modal content={<ModalBase></ModalBase>}>
        <Button.AddTodo />
      </Modal>

      {CARD.map((card, idx) => (
        <li key={idx}>
          <Modal content={<ModalBase></ModalBase>}>
            <Card {...card} />
          </Modal>
        </li>
      ))}
    </S.ColumnContainer>
  );
}

export default Column;
