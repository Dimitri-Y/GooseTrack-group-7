import styled from 'styled-components';

export const LogoutBtnStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px; 
  width: 132px;
  padding: 14px;
  border: none;
  border-radius: 16px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.28;
  background-color:${p => p.theme.mainAccentColor || '#3E85F3'};
  color: ${p => p.theme.buttonTextColor || '#FFFFFF'};
  cursor: pointer;
  transition: all 250ms;

  &:hover,
  &:focus {
    background-color: ${p => p.theme.mainAccentColorActive || '#2B78EF'};
  }

    @media screen and (min-width: 768px) {
      width: 140px;
      font-size: 18px;
      padding: 16px;
      gap: 12px;
    }
    @media screen and (max-width: 768px) {
    margin-bottom: 24px;
    }
`;


export const LogoutIcon = styled.svg`
  width: 18px;
  height: 18px;
  stroke: currentColor;
  fill: none;

  @media screen and (min-width: 768px ) {
    width: 20px;
    height: 20px;
`;