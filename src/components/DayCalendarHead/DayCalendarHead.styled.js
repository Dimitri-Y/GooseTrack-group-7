import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 14px 18px;
  margin-bottom: 16px;
  border: 1px solid #dce3e5;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  color: #343434;
  background-color: #ffffff;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3px;
`;

export const Number = styled.span`
  padding: 4px 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 20px;
  height: 22px;
  border-radius: 6px;
  box-sizing: border-box;
  font-weight: 900;
  font-size: 12px;
  line-height: 14px;
  color: ${(props) => props.$selected && '#ffffff'};
  background-color: ${(props) => props.$selected && '#3e85f3'};
  cursor: pointer;
`;

export const DayWeek = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 18px;
  text-align: center;
`;
