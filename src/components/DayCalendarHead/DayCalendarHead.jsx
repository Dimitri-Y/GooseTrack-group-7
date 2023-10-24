import { useSelector } from 'react-redux';
import { selectDate } from '../../redux/tasks/tasksSelectors';
// import { useParams } from 'react-router-dom';
import { DayWeek, List, ListItem, Number } from './DayCalendarHead.styled';
import { useDispatch } from 'react-redux';
import { changeDate } from '../../redux/tasks/dateSlice';
import { changeParameterUrl } from '../../redux/tasks/parameterUrlSlice';
import { useAdaptivePicture } from '../../hooks/useAdaptivePicture';

import { endOfWeek, eachDayOfInterval, startOfWeek } from 'date-fns';
import { useState } from 'react';

const DayCalendarHead = ({ selectedDate = Date.now(), weekStartDay = 1 }) => {
  const mediaResponse = useAdaptivePicture();
  const isMobile = mediaResponse.isMobile;

  const dispatch = useDispatch();
  const date = useSelector(selectDate);
  // const { currentDay } = useParams();

  const formattedDate = date.split('-').slice(2).join('');
  const [selectedDay, setSelectedDay] = useState(formattedDate);
  // const [currentWeek, setCurrentWeek] = useState([]);

  const weekStart = startOfWeek(selectedDate, { weekStartsOn: weekStartDay });
  const weekEnd = endOfWeek(selectedDate, { weekStartsOn: weekStartDay });
  const weekDays = eachDayOfInterval({ start: weekStart, end: weekEnd });

  const getFormattedDate = (event) => {
    const number = event.nativeEvent.target.lastElementChild.innerHTML;
    setSelectedDay(number);
    const array = date.split('-').splice(0, 2);
    array.push(number);
    const newDate = array.join('-');
    dispatch(changeDate(newDate));
  };

  const updateParameterUrl = (day) => {
    if (day.getUTCDay() === 0) {
      dispatch(changeParameterUrl('monday'));
    }
    if (day.getUTCDay() === 1) {
      dispatch(changeParameterUrl('tuesday'));
    }
    if (day.getUTCDay() === 2) {
      dispatch(changeParameterUrl('wednesday'));
    }
    if (day.getUTCDay() === 3) {
      dispatch(changeParameterUrl('thursday'));
    }
    if (day.getUTCDay() === 4) {
      dispatch(changeParameterUrl('friday'));
    }
    if (day.getUTCDay() === 5) {
      dispatch(changeParameterUrl('saturday'));
    }
    if (day.getUTCDay() === 6) {
      dispatch(changeParameterUrl('sunday'));
    }
  };

  //   useEffect(
  //     () => setCurrentWeek()),
  //     [currentDay, formattedDate],
  //   );

  return (
    <List>
      {weekDays.map((day) => {
        return (
          <ListItem
            key={day.toISOString()}
            onClick={(event) => {
              getFormattedDate(event);
              updateParameterUrl(day);
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
              $selected={selectedDay === day.getDate()}
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
