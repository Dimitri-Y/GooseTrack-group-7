import styled from 'styled-components';

export const ContainerColum = styled.div`
  display: flex;
  flex-direction: column;
  align-self: start;
  box-sizing: border-box;
  padding: 18px 18px 10px;
  transition:
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 1s cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border 1s cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 1s cubic-bezier(0.4, 0, 0.2, 1);

  border: ${(p) => p.theme.borderTasks};
  border-radius: 8px;
  background-color: ${(p) => p.theme.secondaryBgColor};

  @media (min-width: 375px) {
    padding: 20px 20px 28px;
  }
`;
