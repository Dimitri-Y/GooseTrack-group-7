import styled from 'styled-components';

export const ContainerSection = styled.section`
  box-sizing: border-box;
  background-color: ${(p) => p.theme.taskCardBGColor};
  padding-top: 20px;

  @media (min-width: 375px) {
    padding-top: 32px;
  }
`;
