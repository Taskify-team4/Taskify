import React, { useState } from 'react';
import Image from 'next/image';
import * as S from '@components/inputs/modalInput/selectBox/Select.style';
import { RoundChip } from '@components/chips/Chip.style';
import dropDownIcon from '@public/icons/drop_down.svg';
import checkIcon from '@public/icons/check.svg';

function Select() {
  const sampleList = ['To Do', 'on Progress', 'Done'];
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <S.SelectContainer>
      <S.SelectTitle onClick={handleOpen}>
        <RoundChip $size={'large'} $color={'purple'}>
          <S.SelectTile $size={'tiny'} $color={'purple'} />
          dkssud
        </RoundChip>
        <Image src={dropDownIcon.src} width={26} height={26} alt="dropDownIcon" />
      </S.SelectTitle>
      {isOpen && (
        <S.SelectOption>
          {sampleList.map((item) => (
            <S.Select key={item}>
              <Image src={checkIcon.src} width={22} height={22} alt="checkIcon" />
              <RoundChip $size={'large'} $color={'purple'}>
                <S.SelectTile $size={'tiny'} $color={'purple'} />
                {item}
              </RoundChip>
            </S.Select>
          ))}
        </S.SelectOption>
      )}
    </S.SelectContainer>
  );
}

export default Select;
