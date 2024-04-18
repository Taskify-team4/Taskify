import styled from 'styled-components';
import device from '@utils/breakpointsDevice';
import ProfileIcon from '@components/profileIcon/ProfileIcon';

export const CardContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: 12px;

  position: relative;

  box-sizing: border-box;
  padding: 20px;
  width: 314px;

  border: var(--gray300) 1px solid;
  border-radius: 6px;

  @media ${device.tablet} {
    flex-direction: row;
    width: 544px;
  }

  @media ${device.mobile} {
    flex-direction: column;
    padding: 10px;
    max-width: 284px;
  }
`;

export const CardImage = styled.div`
  position: relative;

  width: 270px;
  height: 160px;

  @media ${device.tablet} {
    width: 91px;
    height: 53px;
  }
  @media ${device.mobile} {
    width: 260px;
    height: 152px;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 12px;
`;

export const CardTitle = styled.div`
  font-size: 16px;
  font-weight: 500;

  @media ${device.tablet} {
    font-size: 14px;
  }
`;

export const CardMeta = styled.div`
  @media ${device.tablet} {
    display: flex;
    align-items: center;
  }
  @media ${device.mobile} {
    display: block;
  }
`;

export const CardChips = styled.div`
  display: flex;
  gap: 6px;
`;

export const CardDateOwner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;

  @media ${device.tablet} {
    margin-top: 0;
  }
  @media ${device.mobile} {
    margin-top: 12px;
  }
`;

export const CardDate = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;

  font-weight: 500;
  font-size: 12px;
  color: var(--gray500);

  @media ${device.tablet} {
    margin-left: 10px;
  }

  @media ${device.mobile} {
    font-size: 10px;
    margin-left: 0;
  }
`;

export const CardOwner = styled(ProfileIcon)`
  width: 24px;
  height: 24px;
  font-size: 12px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  @media ${device.tablet} {
    position: absolute;
    right: 20px;
  }
`;
