import styled from 'styled-components';

export const ImageInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ImageInputLabel = styled.label`
  color: var(--black200);
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
`;

export const ImageWrapper = styled.div`
  width: 76px;
  height: 76px;
  padding: 24px;
  border-radius: 6px;
  background-color: #f5f5f5;
`;

export const ImageContent = styled.div`
  width: 28px;
  height: 28px;
  position: relative;

  img {
    object-fit: cover;
  }
`;
