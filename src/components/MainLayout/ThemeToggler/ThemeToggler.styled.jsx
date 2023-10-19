import styled from 'styled-components';

export const ThemeTogglerStyled = styled.button`
  fill: #3E85F3;
  border: none;
  display: flex;
  justify content: center;
  background-color: ${(props) =>
    props.theme === 'light' ? '#F7F6F9' : '#171820'};
`;
