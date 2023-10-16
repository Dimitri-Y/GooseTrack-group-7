import PeriodPaginator from 'components/PeriodPaginator/PeriodPaginator';
import PeriodTypeSelect from 'components/PeriodTypeSelect/PeriodTypeSelect';

const CalendarToolbar = () => {
  return (
    <div>
      <a>Calendar</a>
      <PeriodPaginator />
      <PeriodTypeSelect />
    </div>
  );
};

export default CalendarToolbar;
