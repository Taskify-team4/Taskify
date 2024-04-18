import React, { useState } from 'react';
import Image from 'next/image';
import Chip from '@components/chips/Chip';
import * as S from '@components/inputs/modalInput/selectBox/Select.style';
import dropDownIcon from '@public/icons/drop_down.svg';
import checkIcon from '@public/icons/check.svg';

type SelectProps = {
  onData: string[];
  onType?: boolean;
};

function Select({ onData, onType }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <S.SelectContainer>
      <S.SelectTitle onClick={handleOpen}>
        {onType ? (
          <>
            <S.SelectTitleInput placeholder="이름을 입력해 주세요." />
          </>
        ) : (
          <Chip.Round size={'large'} color={'purple'}>
            <S.SelectTile $size={'tiny'} $color={'purple'} />
            To Do
          </Chip.Round>
        )}
        <Image src={dropDownIcon.src} width={26} height={26} alt="dropDownIcon" />
      </S.SelectTitle>
      {isOpen && (
        <S.SelectOption>
          {onType
            ? onData.map((item: string) => (
                <S.Select key={item}>
                  <Image src={checkIcon.src} width={22} height={22} alt="checkIcon" />
                  <S.SelectTile $size={'tiny'} $color={'purple'} />
                  <S.SelectTileItem>{item}</S.SelectTileItem>
                </S.Select>
              ))
            : onData.map((item: string) => (
                <S.Select key={item}>
                  <Image src={checkIcon.src} width={22} height={22} alt="checkIcon" />
                  <Chip.Round size={'large'} color={'purple'}>
                    <S.SelectTile $size={'tiny'} $color={'purple'} />
                    <S.SelectTileItem>{item}</S.SelectTileItem>
                  </Chip.Round>
                </S.Select>
              ))}
        </S.SelectOption>
      )}
    </S.SelectContainer>
  );
}

export default Select;
