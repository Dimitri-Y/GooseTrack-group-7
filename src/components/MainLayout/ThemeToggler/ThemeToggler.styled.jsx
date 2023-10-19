import styled from 'styled-components';

export const ThemeTogglerBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${p => p.theme.mainAccentColor || '#3E85F3'} ;
  border: none;
  background-color: transparent;
`;

export const ThemeIcon = styled.svg`
  width: 24px;
  height: 24px;
  //stroke: currentColor;
  fill: currentColor;;

  @media screen and (min-width: 768px ) {
    width: 32px;
    height: 32px;
`;
