import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import { selectTasks } from '../../redux/tasks/tasksSelectors';
import CalendarTable from './CalendarTable/CalendarTable';
import { MonthCalendarHeader } from './MonthCalendarHeader/MonthCalendarHeader';

const ChoosedMonth = () => {
  const tasks = useSelector(selectTasks);

  moment.updateLocale('en', { week: { dow: 1 } });

  const { currentDate } = useParams();
  const today = moment(currentDate);
  const startDay = today.clone().startOf('month').startOf('week');

  return (
    <>
      <MonthCalendarHeader />
      <CalendarTable startDay={startDay} today={today} tasks={tasks} />
    </>
  );
};

export default ChoosedMonth;
