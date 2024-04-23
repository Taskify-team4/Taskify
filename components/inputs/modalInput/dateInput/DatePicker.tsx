import { forwardRef, useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import * as S from '@components/inputs/modalInput/dateInput/DatePicker.style';
import { useDashContext } from '@contexts/dashContext';

type TDatePickerProps = {
  onChange: () => void;
};

const DatePicker = ({ onChange }: TDatePickerProps) => {
  // const { selectedDate, setSelectedDate } = useDashContext();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleChange = (date: Date | null) => {
    setSelectedDate(date);
    const formattedData = formatDate(date);
    onChange(formattedData);
  };

  const formatDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}`;
  };

  const CustomInput = forwardRef((props, ref: React.ForwardedRef<HTMLInputElement>) => {
    return (
      <S.CalendarInputWrap>
        <S.CalendarInput {...props} ref={ref} type="text" placeholder="날짜를 입력해 주세요." />
      </S.CalendarInputWrap>
    );
  });

  return (
    <S.DatePickerWrapper>
      <ReactDatePicker
        customInput={<CustomInput />}
        selected={selectedDate}
        onChange={handleChange}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={30}
        timeCaption="time"
        dateFormat="yyyy-MM-dd HH:mm"
      />
    </S.DatePickerWrapper>
  );
};

export default DatePicker;
