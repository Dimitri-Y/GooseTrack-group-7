import styled from 'styled-components';

export const CalendarToolbarStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 18px;
  transition:
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 1s cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 1s cubic-bezier(0.4, 0, 0.2, 1);

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
