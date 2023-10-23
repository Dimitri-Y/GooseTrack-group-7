import styled from 'styled-components';

export const TasksList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 18px;
  max-height: calc(100vh - 450px);
  overflow: auto;
`;
