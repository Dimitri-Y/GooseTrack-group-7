import { useSelector } from 'react-redux';
import { selectDateCalendar } from '../../redux/tasks/tasksSelectors';
import { DayWeek, List, ListItem, Number } from './DayCalendarHead.styled';
import { useDispatch } from 'react-redux';
import { useAdaptivePicture } from '../../hooks/useAdaptivePicture';
import { endOfWeek, eachDayOfInterval, startOfWeek } from 'date-fns';
import { changeDateCalendar } from '../../redux/tasks/dateCalendarSlice';
import { useNavigate } from 'react-router';

const DayCalendarHead = () => {
  const mediaResponse = useAdaptivePicture();
  const isMobile = mediaResponse.isMobile;
  const weekStartDay = 1;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const dateCalendarSelected = useSelector(selectDateCalendar);

  const weekStart = startOfWeek(new Date(dateCalendarSelected), {
    weekStartsOn: weekStartDay,
  });
  const weekEnd = endOfWeek(new Date(dateCalendarSelected), {
    weekStartsOn: weekStartDay,
  });
  const weekDays = eachDayOfInterval({ start: weekStart, end: weekEnd });

  return (
    <List>
      {weekDays.map((day) => {
        return (
          <ListItem
            key={day.toISOString()}
            onClick={() => {
              dispatch(
                changeDateCalendar(
                  day.toLocaleDateString().split('.').reverse().join('-'),
                ),
              );
              navigate(
                `/calendar/day/${day
                  .toLocaleDateString()
                  .split('.')
                  .reverse()
                  .join('-')}`,
              );
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
              $selected={
                dateCalendarSelected ===
                day.toLocaleDateString().split('.').reverse().join('-')
              }
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
