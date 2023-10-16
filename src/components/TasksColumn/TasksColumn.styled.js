import styled from 'styled-components';

export const ContainerColum = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 18px 18px 20px;
  border: 1px solid #dce3e5;
  border-radius: 8px;
  background-color: #ffffff;

  @media (min-width: 375px) {
    padding: 20px 20px 28px;
  }
`;
