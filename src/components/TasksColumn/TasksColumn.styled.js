import styled from 'styled-components';

export const ContainerColum = styled.div`
  display: flex;
  flex-direction: column;
  align-self: start;
  box-sizing: border-box;
  padding: 18px 18px 10px;
  border: ${(p) => p.theme.borderTasks};
  border-radius: 8px;
  background-color: ${(p) => p.theme.secondaryBgColor};

  @media (min-width: 375px) {
    padding: 20px 20px 28px;
  }
`;
