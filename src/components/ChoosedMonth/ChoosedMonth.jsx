import { useSelector } from 'react-redux';
import moment from 'moment';
import {
  selectDateCalendar,
  selectTasks,
} from '../../redux/tasks/tasksSelectors';
import CalendarTable from './CalendarTable/CalendarTable';
import { MonthCalendarHeader } from './MonthCalendarHeader/MonthCalendarHeader';
import { useMemo } from 'react';

const ChoosedMonth = () => {
  const tasks = useSelector(selectTasks);
  const currentDate = useSelector(selectDateCalendar);
  moment.updateLocale('en', { week: { dow: 1 } });

  const today = useMemo(() => moment(currentDate), [currentDate]);
  const startDay = useMemo(
    () => today.clone().startOf('month').startOf('week'),
    [today],
  );

  return (
    <>
      <MonthCalendarHeader />
      <CalendarTable startDay={startDay} today={today} tasks={tasks} />
    </>
  );
};

export default ChoosedMonth;
