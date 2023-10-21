import { CalendarToolbarStyles } from './CalendarToolbar.styled';
import PeriodPaginator from 'components/PeriodPaginator/PeriodPaginator';
import PeriodTypeSelect from 'components/PeriodTypeSelect/PeriodTypeSelect';

const CalendarToolbar = () => {
  return (
    <>
      <CalendarToolbarStyles>
        <PeriodPaginator />
        <PeriodTypeSelect />
      </CalendarToolbarStyles>
    </>
  );
};

export default CalendarToolbar;
