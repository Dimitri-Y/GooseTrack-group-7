import { useSelector } from 'react-redux';
import { selectDate } from '../../redux/tasks/tasksSelectors';
import { useParams } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { DayWeek, List, ListItem, Number } from './DayCalendarHead.styled';
import getCurrentWeekNumber from '../../utils/getCurrentWeekNumber';
import { useDispatch } from 'react-redux';
import { changeDate } from '../../redux/tasks/dateSlice';

const DayCalendarHead = () => {
  // const formattedDate = '6';
  // const currentDay = 'wednesday';
  const dispatch = useDispatch();
  const date = useSelector(selectDate);
  const { currentDay } = useParams();
  const formattedDate = date.split('-').splice(2);
  const [selectedDay, setSelectedDay] = useState(formattedDate);
  const [dayWeek, setDayWeek] = useState(currentDay);

  const currentWeekNumber = useMemo(
    () => getCurrentWeekNumber(dayWeek, formattedDate),
    [dayWeek, formattedDate],
  );

  const handleClick = (event) => {
    const value = event.nativeEvent.target.innerHTML;
    setSelectedDay(value);
    setDayWeek();
    const array = date.split('-').splice(0, 2);
    console.log(array);
    array.push(value);
    const newDate = array.join('-');
    console.log(newDate);
    dispatch(changeDate(newDate));
  };

  return (
    <List>
      {currentWeekNumber.map((item, index) => (
        <ListItem key={index}>
          <DayWeek>{item.day}</DayWeek>
          <Number $selected={selectedDay === item.date} onClick={handleClick}>
            {item.date}
          </Number>
        </ListItem>
      ))}
    </List>
  );
};
export default DayCalendarHead;
