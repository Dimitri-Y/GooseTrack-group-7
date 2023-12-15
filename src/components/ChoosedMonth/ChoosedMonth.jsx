import { useSelector } from 'react-redux';
import moment from 'moment';
import {
  selectDateCalendar,
  selectError,
  selectTasks,
} from '../../redux/tasks/tasksSelectors';
import CalendarTable from './CalendarTable/CalendarTable';
import { MonthCalendarHeader } from './MonthCalendarHeader/MonthCalendarHeader';
import { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTasks } from '../../redux/tasks/tasksOperations';
import { toast } from 'react-toastify';

const ChoosedMonth = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const tasks = useSelector(selectTasks);
  const currentDate = useSelector(selectDateCalendar);
  moment.updateLocale('en', { week: { dow: 1 } });

  const today = useMemo(() => moment(currentDate), [currentDate]);
  const startDay = useMemo(
    () => today.clone().startOf('month').startOf('week'),
    [today],
  );

  useEffect(() => {
    const fetchData = () => {
      dispatch(fetchTasks());
    };
    fetchData();
    if (error) toast.error(error);
  }, [dispatch, error]);

  return (
    <>
      <MonthCalendarHeader />
      <CalendarTable startDay={startDay} today={today} tasks={tasks} />
    </>
  );
};

export default ChoosedMonth;
