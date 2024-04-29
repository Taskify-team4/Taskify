import styled from 'styled-components';
import Button from '@components/buttons/Button';
import ColorPalette from '@components/chips/ColorPalette';
import device from '@utils/breakpointsDevice';

export const EditDashboardName = styled.div`
  max-width: 620px;
  height: 256px;
  padding: 30px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: white;
  @media ${device.mobile} {
    max-width: 100%;
  }
`;

export const EditNameTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DashboardName = styled.div`
  font-size: 20px;
  font-weight: 700;
  width: 100%;
`;

export const StyledColorPalette = styled(ColorPalette)`
  display: flex;
  justify-content: right;
`;

export const EditNameButton = styled(Button.Confirm)`
  position: absolute;
  bottom: 30px;
  right: 30px;
`;
