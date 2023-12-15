import { forwardRef, useEffect, useState } from 'react';
import { format, addMonths, subMonths } from 'date-fns';
import DatePicker from 'react-datepicker';
import {
  CalendarGlobalStyles,
  TitleWrapper,
  ContainerBtn,
  BtnSwitch,
  SvgIcon,
  Path,
} from './DatepickerTasks.styled';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import { useDispatch } from 'react-redux';
import { changeDateCalendar } from '../../redux/tasks/dateCalendarSlice';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectDateCalendar } from '../../redux/tasks/tasksSelectors';

const DatepickerTasks = ({ setDate, themeColor }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const dateCalendar = useSelector(selectDateCalendar);
  const navigate = useNavigate();
  const [_, __, monthOrDay] = location.pathname.split('/');
  const [selectedDate, setSelectedDate] = useState(new Date(dateCalendar));

  const CustomInput = forwardRef(({ onClick }, ref) => {
    return (
      <>
        {monthOrDay === 'month' ? (
          <TitleWrapper onClick={onClick} ref={ref}>
            {format(selectedDate, 'MMMM yyyy')}
          </TitleWrapper>
        ) : (
          <TitleWrapper onClick={onClick} ref={ref}>
            {format(selectedDate, 'dd MMM yyyy')}
          </TitleWrapper>
        )}
      </>
    );
  });

  const handlePrevDay = () => {
    if (monthOrDay === 'month') {
      const newDate = subMonths(selectedDate, 1);
      setSelectedDate(newDate);
      setDate('PREV');
      dispatch(
        changeDateCalendar(
          newDate.toLocaleDateString().split('.').reverse().join('-'),
        ),
      );
      navigate(
        `/calendar/month/${newDate
          .toLocaleDateString()
          .split('.')
          .reverse()
          .join('-')
          .slice(0, 7)}`,
      );
    } else {
      const prevDay = selectedDate;
      prevDay.setDate(prevDay.getDate() - 1);
      setSelectedDate(prevDay);
      setDate(prevDay);
      dispatch(
        changeDateCalendar(
          prevDay.toLocaleDateString().split('.').reverse().join('-'),
        ),
      );
      const newDate = format(prevDay, 'yyyy-MM-dd');
      navigate(`/calendar/day/${newDate}`);
    }
  };

  const handleNextDay = (date) => {
    if (monthOrDay === 'month') {
      const newDate = addMonths(selectedDate, 1);
      setSelectedDate(newDate);
      setDate('NEXT', date);
      dispatch(
        changeDateCalendar(
          newDate.toLocaleDateString().split('.').reverse().join('-'),
        ),
      );
      navigate(
        `/calendar/month/${newDate
          .toLocaleDateString()
          .split('.')
          .reverse()
          .join('-')
          .slice(0, 7)}`,
      );
    } else {
      const prevDay = selectedDate;
      prevDay.setDate(prevDay.getDate() + 1);
      setSelectedDate(prevDay);
      setDate(prevDay);
      dispatch(
        changeDateCalendar(
          prevDay.toLocaleDateString().split('.').reverse().join('-'),
        ),
      );
      const newDate = format(prevDay, 'yyyy-MM-dd');
      navigate(`/calendar/day/${newDate}`);
    }
  };

  const handleSelectDate = (date) => {
    if (monthOrDay === 'month') {
      setSelectedDate(date);
      setDate('DATE', date);
      dispatch(
        changeDateCalendar(
          date.toLocaleDateString().split('.').reverse().join('-'),
        ),
      );
      navigate(
        `/calendar/month/${date
          .toLocaleDateString()
          .split('.')
          .reverse()
          .join('-')
          .slice(0, 7)}`,
      );
    } else {
      const newDate = format(date, 'yyyy-MM-dd');
      setSelectedDate(date);
      setDate('DATE', date);
      dispatch(
        changeDateCalendar(
          date.toLocaleDateString().split('.').reverse().join('-'),
        ),
      );
      navigate(`/calendar/day/${newDate}`);
    }
  };

  useEffect(() => setSelectedDate(new Date(dateCalendar)), [dateCalendar]);

  return (
    <>
      <DatePicker
        selected={selectedDate}
        onChange={handleSelectDate}
        customInput={<CustomInput />}
        dateFormat={'dd MM yyyy'}
        calendarStartDay={1}
        formatWeekDay={(day) => day.substring(0, 1)}
      />

      <ContainerBtn themecolors={themeColor}>
        <BtnSwitch
          onClick={handlePrevDay}
          themecolors={themeColor}
          style={
            themeColor === 'dark'
              ? { borderRight: 'solid #FFFFFF26 1px' }
              : { borderRight: 'solid #DCE3E580 1px' }
          }
        >
          <SvgIcon width="18" height="18" viewBox="0 0 18 18" fill="none">
            <Path themecolors={themeColor} d="M11.25 13.5L6.75 9L11.25 4.5" />
          </SvgIcon>
        </BtnSwitch>
        <BtnSwitch themecolors={themeColor} onClick={handleNextDay}>
          <SvgIcon width="18" height="18" viewBox="0 0 18 18" fill="none">
            <Path themecolors={themeColor} d="M6.75 13.5L11.25 9L6.75 4.5" />
          </SvgIcon>
        </BtnSwitch>
      </ContainerBtn>
      <CalendarGlobalStyles />
    </>
  );
};

export default DatepickerTasks;
