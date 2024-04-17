import React, { ReactNode } from 'react';
import Image from 'next/image';
import * as S from '@components/inputs/modalInput/dateInput/DateInput.style';
import calendarIcon from '@public/icons/calendar.svg';
import DatePicker from './DatePicker';

type TagInputProps = {
  children: ReactNode;
  // id: string;
  // type: string;
  // placeholder: string;
  onRequired?: boolean;
};

function DateInput({ children, onRequired }: TagInputProps) {
  return (
    <S.DateInputContainer>
      <S.DateInputTitleContainer>
        <S.DateInputLabel>{children}</S.DateInputLabel>
        {onRequired && <S.DateInputRequired>*</S.DateInputRequired>}
      </S.DateInputTitleContainer>
      <S.DateInputContent>
        <Image src={calendarIcon} width={20} height={20} alt="calendarIcon" />
        <DatePicker />
        {/* <S.DateInput id={id} type={type} placeholder={placeholder} /> */}
      </S.DateInputContent>
    </S.DateInputContainer>
  );
}

export default DateInput;
