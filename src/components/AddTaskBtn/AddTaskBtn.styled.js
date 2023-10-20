import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 300px;
  height: 48px;
  padding: 0;
  border: 1px dashed #3e85f3;
  border-radius: 8px;
  color: #111111;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  background-color: #e3f3ff;

  @media (min-width: 375px) {
    width: 304px;
    height: 52px;
  }
`;
