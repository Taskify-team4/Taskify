import styled from 'styled-components';

export const CalendarInputWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const CalendarInput = styled.input`
  width: 100%;
  border: none;
  padding: 0;
  padding-left: 5px;

  color: var(--black300);
  font-size: 16px;
  font-weight: 400;
  line-height: normal;

  &::placeholder {
    color: var(--gray400);
  }
  &:focus {
    outline: none;
  }
`;

export const DatePickerWrapper = styled.div`
  width: 100%;

  .react-datepicker-wrapper {
    width: 100%;
  }
`;
