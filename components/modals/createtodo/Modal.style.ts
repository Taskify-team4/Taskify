import device from '@utils/breakpointsDevice';
import styled from 'styled-components';

export const CreateToDoContainer = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    width: 100%;
  }
`;

export const CreateToDoTitle = styled.span`
  padding-bottom: 32px;
  color: var(--black200);
  font-size: 24px;
  font-weight: 700;
  line-height: normal;

  @media ${device.mobile} {
    padding-bottom: 24px;
    font-size: 20px;
  }
`;

export const CreateToDoInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media ${device.mobile} {
    gap: 24px;
  }
`;

export const CreateToDoSelectContainer = styled.div`
  display: flex;
  gap: 16px;

  @media ${device.mobile} {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
`;

export const CreateToDoBtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 25px;
  gap: 12px;

  @media ${device.mobile} {
    padding-top: 24px;
    gap: 11px;
  }
`;
