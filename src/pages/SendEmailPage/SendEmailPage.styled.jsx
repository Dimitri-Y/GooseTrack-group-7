import styled from 'styled-components';
// import { ReactComponent as UserCheckSvg } from '../../components/Icons/user.svg';
// import { ReactComponent as IconError } from '../../images/svg/error-icon.svg';
import { ReactComponent as IconCorrect } from '../../images/svg/done-icon.svg';

export const SendEmailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
  background-color: ${p => p.theme.secondaryAccentColor};
`;

export const Wrapper = styled.div`
  width: 340px;
  height: 100%;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 28px;
  background-color:  ${p => p.theme.secondaryBgColor};
  border-radius: 12px;

  @media screen and (min-width: 1440px ) {
    width: 380px;
    
  }

  @media screen and (min-width: 1440px ) {
    width: 440px;
  }
`;

export const CheckBtn = styled.div`
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


    @media screen and (min-width: 768px) {
      width: 140px;
      font-size: 18px;
      padding: 16px;
      gap: 12px;
    }
  
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
  color: ${p => p.theme.mainTextColor || '#111111'};
  line-height: 32px;

  @media screen and (min-width: 1440px ) {
    font-size: 28px;
    font-weight: 600;
  }
  
  @media screen and (min-width: 1440px ) {
    font-size: 32px;
    font-weight: 700;
  }
`;

export const Text = styled.p`
  font-size: inherit;
`;

export const CheckIcon = styled(IconCorrect)`
  width: 32px;
  height: 32px;
  @media screen and (min-width: 768px ) {
    width: 40px;
    height: 40px;
  }

  @media screen and (min-width: 1440px ) {
    width: 48px;
    height: 48px;
  }
`;
