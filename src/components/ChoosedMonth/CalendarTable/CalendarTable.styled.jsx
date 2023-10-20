import styled from 'styled-components';

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
  border: 1px solid rgba(220, 227, 229, 0.8);
  border-radius: 8px;
  overflow: hidden;
  background-color: #ffffff;
`;

export const CurrentDay = styled.div`
  padding: 4px 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #3e85f3;
  border-radius: 8px;
  color: #ffffff;
  margin-bottom: 3px;

  @media screen and (min-width: 768px) {
    padding: 4px 8px;
  }
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

  @media screen and (min-width: 1440px) {
    font-size: 16px;
    line-height: 1.1;
  }
`;
export const CellWrapper = styled.div`
  min-width: 30px;
  min-height: 84px;
  padding: 1px;
  border-block-end: 1px solid rgba(220, 227, 229, 0.8);
  border-inline-end: 1px solid rgba(220, 227, 229, 0.8);
  &:nth-child(7n) {
    border-right: none;
  }
  cursor: ${(props) => (props.isSelectedMonth ? 'pointer' : 'auto')};
  transition: box-shadow 300ms linear;
  &:hover,
  &:focus {
    box-shadow:
      0px 1px 1px rgba(0, 0, 0, 0.36),
      0px 4px 4px rgba(255, 255, 255, 0.3),
      1px 4px 6px rgba(0, 0, 0, 0.36);
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
