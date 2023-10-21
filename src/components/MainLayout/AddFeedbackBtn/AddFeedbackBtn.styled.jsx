
import styled from 'styled-components';

export const FeedbackBtn = styled.button`
  font-family: "Inter-600", sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;

  background-color: #3e85f3;
  color: #fff;

  padding: 8px 20px;
  border-radius: 10px;
  border: none;

  text-align: center;
  transition: background-color var(--cubic);
  cursor: pointer;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 18px;
    
    padding: 12px 32px;
    border-radius: 14px;
  }
  &:hover,
  &:focus {
    background-color: #2b78ef;
  }
`;