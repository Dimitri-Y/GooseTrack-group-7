import styled from 'styled-components';

export const ContainerSection = styled.section`
  box-sizing: border-box;
  transition:
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 1s cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 1s cubic-bezier(0.4, 0, 0.2, 1);

  background-color: ${(p) => p.theme.taskCardBGColor};
  padding-top: 20px;

  @media (min-width: 375px) {
    padding-top: 32px;
  }
`;
