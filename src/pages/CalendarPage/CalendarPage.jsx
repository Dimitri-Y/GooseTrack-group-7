import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';
import CalendarToolbar from 'components/CalendarToolbar/CalendarToolbar';
import { useSelector } from 'react-redux';
import { selectDateCalendar } from '../../redux/tasks/tasksSelectors';

const CalendarPage = () => {
  const navigate = useNavigate();

  const dateCalendar = useSelector(selectDateCalendar);
  const month = dateCalendar.slice(0, 7);

  useEffect(() => {
    navigate(`/calendar/month/${month}`);
  }, []);

  return (
    <main>
      <CalendarToolbar />
      <Outlet />
    </main>
  );
};

export default CalendarPage;
