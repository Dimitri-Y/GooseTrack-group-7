// import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;
`;

export const BurgerTitleBox = styled.div`
  display: flex;
  align-items: center;
`;

export const BurgerBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  padding: 0;
  color: inherit;
  background-color: transparent;
  border: none;

  @media screen and (min-width: 768px ) {
    width: 34px;
    height: 34px;
  }

  @media screen and (min-width: 1440px ) {
    display: none;
  }
`;

export const IconMenu = styled.svg`
  width: 24px;
  height: 24px;
  stroke: currentColor;
  fill: none;

  @media screen and (min-width: 768px ) {
    width: 34px;
    height: 34px;
  }
`;

export const TitleWrap = styled.div`
  display: none;
  
  @media screen and (min-width: 1440px ) {
    display: flex;
    gap: 8px;
    align-items: center;
  }
`;

export const ImgGoose = styled.img`
  width: 64px;
  height: 60px;
  flex-shrink: 0;
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  //gap: 8px;
`;

export const Message = styled.div`
  font-size: 14px;
  font-weight: 600;
  line-height: 1.28;
  span {
    color:${p => p.theme.mainAccentColor || '#3E85F3'} ;
  }
`;

export const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;

  @media screen and (min-width: 768px ) {
    gap: 24px;
  }
`;


// export const IconWrapper = styled.svg`
//   width: ${(props) => props.size || '12px'};
//   height: ${(props) => props.size || '12px'};
//   fill: ${(props) => props.color || '#ffffff'};
//   display: inline-block;
//   margin-right: 5px;
//   box-shadow:
//     0 0 5px #00baff,
//     0 0 10px #00baff,
//     0 0 20px #00baff,
//     0 0 40px #00baff,
//     0 0 80px #00baff;
// `;
