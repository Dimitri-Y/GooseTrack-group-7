import styled from 'styled-components';

export const Button = styled.button`
  position: absolute;
  bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 48px;
  background-color: #e3f3ff;
  border: 1px dashed #3e85f3;
  border-radius: 8px;
  color: #111111;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;

  @media (min-width: 375px) {
    width: 304px;
    height: 52px;
  }
`;
