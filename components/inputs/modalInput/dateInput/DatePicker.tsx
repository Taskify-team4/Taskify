import { forwardRef, useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import * as S from '@components/inputs/modalInput/dateInput/DatePicker.style';
import { formatDate } from '@utils/formatDate';

type TDatePickerProps = {
  onChange: (formattedData: string) => void;
  defaultValue?: string;
};

const DatePicker = ({ onChange, defaultValue }: TDatePickerProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleChange = (date: any) => {
    setSelectedDate(date);
    const formattedData = formatDate(date);
    onChange(formattedData);
  };

  const CustomInput = forwardRef((props, ref: React.ForwardedRef<HTMLInputElement>) => {
    return (
      <S.CalendarInputWrap>
        <S.CalendarInput
          {...props}
          ref={ref}
          type="text"
          placeholder={defaultValue ? defaultValue : '날짜를 입력해 주세요.'}
        />
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
