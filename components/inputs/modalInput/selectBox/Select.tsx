import React, { useState } from 'react';
import Image from 'next/image';
import Chip from '@components/chips/Chip';
import * as S from '@components/inputs/modalInput/selectBox/Select.style';
import dropDownIcon from '@public/icons/drop_down.svg';
import checkIcon from '@public/icons/check.svg';
import { TColumn } from '@pages/dashboard/Dashboard.type';

export type TMember = {
  id: number;
  email: string;
  nickname: string;
  profileImageUrl: null;
  createdAt: string;
  updatedAt: string;
  isOwner: boolean;
  userId: number;
};

type SelectProps = {
  columns: TColumn[];
  members: TMember[];
  onType: boolean;
  onChangeColumn: (id: number) => void;
  onChangeAssignee: (id: number) => void;
};

function Select({ columns, members, onType, onChangeColumn, onChangeAssignee }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [assignee, setAssignee] = useState('');
  const [column, setColumn] = useState('');

  const handleClickMember = (member: TMember) => {
    onChangeAssignee(member.userId);
    setAssignee(member.nickname);
    handleOpen();
  };

  const handleClickColumn = (column: TColumn) => {
    onChangeColumn(column.id);
    setColumn(column.title);
    handleOpen();
  };

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <S.SelectContainer>
      <S.SelectTitle onClick={handleOpen}>
        {onType ? (
          <>
            {assignee && <S.SelectTitleName str={assignee} />}
            <S.SelectTitleInput placeholder="이름을 입력해 주세요." value={assignee} />
          </>
        ) : (
          <Chip.Round size={'large'} color={'purple'}>
            <S.SelectTile $size={'tiny'} $color={'purple'} />
            {column}
          </Chip.Round>
        )}
        <Image src={dropDownIcon.src} width={26} height={26} alt="dropDownIcon" />
      </S.SelectTitle>
      {isOpen && (
        <S.SelectOption>
          {onType
            ? members.map((member) => (
                <S.Select key={member.id} onClick={() => handleClickMember(member)}>
                  <S.SelectTitleName str={member.nickname} />
                  <S.SelectTileItem>{member.nickname}</S.SelectTileItem>
                </S.Select>
              ))
            : columns.map((column) => (
                <S.Select key={column.id} onClick={() => handleClickColumn(column)}>
                  <Image src={checkIcon.src} width={22} height={22} alt="checkIcon" />
                  <Chip.Round size={'large'} color={'purple'}>
                    <S.SelectTile $size={'tiny'} $color={'purple'} />
                    <S.SelectTileItem>{column.title}</S.SelectTileItem>
                  </Chip.Round>
                </S.Select>
              ))}
        </S.SelectOption>
      )}
    </S.SelectContainer>
  );
}

export default Select;
