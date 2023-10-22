import styled from 'styled-components';

export const ContainerSection = styled.section`
  box-sizing: border-box;
  background-color: ${(p) => p.theme.taskCardBGColor};
  padding: 20px;

  @media (min-width: 375px) {
    padding: 32px;
  }
`;
