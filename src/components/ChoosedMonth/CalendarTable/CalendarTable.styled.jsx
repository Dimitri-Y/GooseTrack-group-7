import styled from 'styled-components';

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
  border: ${(p) => p.theme.borderTasks};
  border-radius: 8px;
`;

export const DayWrapper = styled.div`
  height: 25px;
  width: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.25;
  background-color: ${(props) => props.$selected && '#3e85f3'};

  padding: ${(props) => props.$selected && '4px 6px'};
  border-radius: ${(props) => props.$selected && '8px'};
  color: ${(props) => props.$selected && '#ffffff'};
  margin-bottom: ${(props) => props.$selected && '3px'};

  @media screen and (min-width: 768px) {
    padding: ${(props) => props.$selected && '4px 8px'};
  }

  @media screen and (min-width: 1440px) {
    font-size: 16px;
    line-height: 1.1;
  }
`;
export const CellWrapper = styled.div`
  min-width: 30px;
  min-height: 84px;
  padding: 1px;
  border-block-end: ${(p) => p.theme.borderTasks};
  border-inline-end: ${(p) => p.theme.borderTasks};
  background-color: ${(p) => p.theme.secondaryBgColor};

  &:nth-child(7n) {
    border-right: none;
  }

  &:first-child {
    border-top-left-radius: 8px;
  }

  &:last-child {
    border-bottom-right-radius: 8px;
  }

  &:nth-child(7) {
    border-top-right-radius: 8px;
  }

  &:nth-child(36) {
    border-bottom-left-radius: 8px;
  }

  &:nth-last-child(-n + 7) {
    border-block-end: none;
  }

  cursor: ${(props) => (props.$isSelectedMonth ? 'pointer' : 'auto')};
  transition: box-shadow 300ms linear;

  &:hover,
  &:focus {
    box-shadow: ${(p) => p.theme.boxShadow};
  }

  @media screen and (min-width: 768px) {
    min-width: 100px;
    min-height: 125px;
    padding: 4px;
  }
  @media screen and (min-width: 1440px) {
    min-width: 155px;
    padding: 8px;
  }
`;

export const RowInCell = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const TaskListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  list-style-position: inside;
  gap: 2px;
`;
export const CalendarTableMoreBtn = styled.button`
  border: none;
  border-radius: 8px;
  color: transparent;
  text-align: start;
  font-weight: 700;
  font-size: 12px;
  cursor: pointer;
  margin-top: 0;
  padding: 0;
  display: none;
  @media screen and (min-width: 768px) {
    display: inline-block;
    color: #343434;
    background-color: #ffffff;
  }
  @media screen and (min-width: 1440px) {
    color: #343434;
    background-color: #ffffff;
  }
`;
export const TaskItem = styled.button`
  border-radius: 8px;
  padding: 4px 4px 4px 8px;
  border: none;
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  text-align: start;
  font-weight: 700;
  font-size: 10px;
  line-height: 1.4;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 18px;
    padding: 4px 10px 4px 12px;
  }
  @media screen and (min-width: 1440px) {
    padding: 4px 15px 4px 12px;
  }
`;

export const ShowDayWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
