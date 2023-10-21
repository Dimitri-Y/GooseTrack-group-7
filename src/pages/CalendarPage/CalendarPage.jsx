import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';
import CalendarToolbar from 'components/CalendarToolbar/CalendarToolbar';
import { useSelector } from 'react-redux';
import { selectParameter } from '../../redux/tasks/tasksSelectors';

const CalendarPage = () => {
  const navigate = useNavigate();
  const day = useSelector(selectParameter);

  useEffect(() => {
    navigate(`/calendar/day/${day}`);
  }, [day, navigate]);

  return (
    <main>
      <CalendarToolbar />
      <Outlet />
    </main>
  );
};

export default CalendarPage;
