import { PeriodTypeSelectStyles, Button } from './PeriodTypeSelect.styled';
import { selectDateCalendar } from '../../redux/tasks/tasksSelectors';
import { useSelector } from 'react-redux';

const PeriodTypeSelect = () => {
  const dateCalendar = useSelector(selectDateCalendar);
  const month = dateCalendar.slice(0, 7);

  return (
    <PeriodTypeSelectStyles>
      <Button to={`/calendar/month/${month}`} $type ="month" type="button">
        Month
      </Button>
      <Button to={`/calendar/day/${dateCalendar}`} $type="day" type="button">
        Day
      </Button>
    </PeriodTypeSelectStyles>
  );
};

export default PeriodTypeSelect;
