import { useSelector } from 'react-redux';
import { selectDateCalendar } from '../../redux/tasks/tasksSelectors';
// import { useParams } from 'react-router-dom';
import { DayWeek, List, ListItem, Number } from './DayCalendarHead.styled';
import { useDispatch } from 'react-redux';
import { changeDate } from '../../redux/tasks/dateSlice';
import { changeParameterUrl } from '../../redux/tasks/parameterUrlSlice';
import { useAdaptivePicture } from '../../hooks/useAdaptivePicture';

import { endOfWeek, eachDayOfInterval, startOfWeek } from 'date-fns';
import { useState } from 'react';
import { changeDateCalendar } from '../../redux/tasks/dateCalendarSlice';

const days = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
];

const DayCalendarHead = ({ weekStartDay = 1 }) => {
  const mediaResponse = useAdaptivePicture();
  const isMobile = mediaResponse.isMobile;
  const dateCalendarSelected = useSelector(selectDateCalendar);
  // const date = useSelector(selectDate);
  const dispatch = useDispatch();
  const [selectedDay, setSelectedDay] = useState('');

  const weekStart = startOfWeek(dateCalendarSelected, {
    weekStartsOn: weekStartDay,
  });
  const weekEnd = endOfWeek(dateCalendarSelected, {
    weekStartsOn: weekStartDay,
  });
  const weekDays = eachDayOfInterval({ start: weekStart, end: weekEnd });

  const updateDate = (day) => {
    console.log(day);
    const newDate = day.toISOString().slice(0, 10);
    dispatch(changeDate(newDate));
    dispatch(changeDateCalendar(day));
  };

  const updateParameterUrl = (day) => {
    const newDay = days[day.getDay()];
    dispatch(changeParameterUrl(newDay));
  };

  return (
    <List>
      {weekDays.map((day) => {
        return (
          <ListItem
            key={day.toISOString()}
            onClick={() => {
              updateDate(day);
              updateParameterUrl(day);
              setSelectedDay(day.getDate().toString());
            }}
          >
            <DayWeek onClick={(event) => event.stopPropagation()}>
              {isMobile
                ? day
                    .toLocaleDateString('en-UA', { weekday: 'short' })
                    .slice(0, 1)
                : day
                    .toLocaleDateString('en-UA', { weekday: 'short' })
                    .toUpperCase()}
            </DayWeek>
            <Number
              $selected={selectedDay === day.getDate().toString()}
              onClick={(event) => event.stopPropagation()}
            >
              {day.getDate()}
            </Number>
          </ListItem>
        );
      })}
    </List>
  );
};

export default DayCalendarHead;
