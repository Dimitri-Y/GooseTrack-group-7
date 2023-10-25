import { useSelector } from 'react-redux';
import { selectDateCalendar } from '../../redux/tasks/tasksSelectors';
import { DayWeek, List, ListItem, Number } from './DayCalendarHead.styled';
import { useDispatch } from 'react-redux';
import { useAdaptivePicture } from '../../hooks/useAdaptivePicture';
import { endOfWeek, eachDayOfInterval, startOfWeek } from 'date-fns';
import { useMemo } from 'react';
import { changeDateCalendar } from '../../redux/tasks/dateCalendarSlice';

const DayCalendarHead = ({ weekStartDay = 1 }) => {
  const mediaResponse = useAdaptivePicture();
  const isMobile = mediaResponse.isMobile;

  const dispatch = useDispatch();
  const dateCalendarSelected = useSelector(selectDateCalendar);

  const weekStart = startOfWeek(dateCalendarSelected, {
    weekStartsOn: weekStartDay,
  });
  const weekEnd = endOfWeek(dateCalendarSelected, {
    weekStartsOn: weekStartDay,
  });
  const weekDays = eachDayOfInterval({ start: weekStart, end: weekEnd });

  const selectedDay = useMemo(
    () => dateCalendarSelected.getDate().toString(),
    [dateCalendarSelected],
  );

  return (
    <List>
      {weekDays.map((day) => {
        return (
          <ListItem
            key={day.toISOString()}
            onClick={() => dispatch(changeDateCalendar(day))}
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
