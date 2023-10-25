import styled from 'styled-components';

export const CalendarToolbarStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 18px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;