import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';

const CalendarPage = () => {
  const navigate = useNavigate();
  const day = 'monday';

  useEffect(() => {
    navigate(`/calendar/day/${day}`);
  }, [navigate]);

  return (
    <main>
      {/* <CalendarToolbar /> */}
      <Outlet />
    </main>
  );
};

export default CalendarPage;
