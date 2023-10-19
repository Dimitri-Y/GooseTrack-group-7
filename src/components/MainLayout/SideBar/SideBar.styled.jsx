import styled from 'styled-components';

export const Backdrop = styled.div`
  background-color: #00000080;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  opacity: 1;

  @media screen and (min-width: 1440px) {
  opacity: 0;
  pointer-events: none;
  }
`;
export const SideBarStyled = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 6;
  width: 225px;
  height: 100vh;
  padding: 24px 20px;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  @media screen and (min-width: 768px) {
    width: 290px;
    padding: 24px 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 32px 24px 24px;
    position: static;
    transform: translateX(0);
  }
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;

  @media screen and (min-width: 768px) {
    gap: 50px;
  }

  @media screen and (min-width: 1440px) {
    gap: 32px;
  }

`;

export const LogoBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6px;

  @media screen and (min-width: 1440px) {
    gap: 10px;
  }
`;

export const Logo = styled.img`
  width: 36px;
  height: 35px;
  font-size: 16px;

  @media screen and (min-width: 768px) {
    width: 60px;
    height: 58px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 24px;
    width: 71px;
    height: 68px;
   
  }
`;

export const LogoTitle = styled.span`
  font-size: 16px;
  font-weight: 700;
  line-height: 1.38;
  color: #3E85F3;

  @media screen and (min-width: 1440px) {
    font-size: 24px;
  }
`;

export const LogoSpan = styled.span`
  font-size: 16px;
  font-weight: 700;
  font-style: italic;

  @media screen and (min-width: 1440px) {
    font-size: 24px;
  }
`;

export const CloseBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0;
  stroke: currentColor;
  background: none;
  border: none;
  cursor: pointer;

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const CloseIcon = styled.svg`
  width: 24px;
  height: 24px;

  @media screen and (min-width: 768px) and (max-width:1439px) {
    width: 34px;
    height: 34px;}
`;