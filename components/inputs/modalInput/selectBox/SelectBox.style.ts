import device from '@utils/breakpointsDevice';
import styled from 'styled-components';

export const SelectBoxContainer = styled.div`
  width: 100%;
  display: inline-flex;
  flex-direction: column;
  gap: 10px;
`;

export const SelectBoxTitle = styled.span`
  color: var(--black200);
  font-size: 18px;
  font-weight: 500;
  line-height: normal;

  @media ${device.mobile} {
    font-size: 16px;
  }
`;
