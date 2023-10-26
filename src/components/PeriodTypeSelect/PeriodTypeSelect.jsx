import { useNavigate } from 'react-router';
import {
  ButtonM,
  ButtonD,
  PeriodTypeSelectStyles,
} from './PeriodTypeSelect.styled';
import { selectDateCalendar } from '../../redux/tasks/tasksSelectors';
import { useSelector } from 'react-redux';

const PeriodTypeSelect = () => {
  const navigate = useNavigate();
  const dateCalendar = useSelector(selectDateCalendar);
  const day = dateCalendar.toISOString().slice(0, 10);
  const month = dateCalendar.toISOString().slice(0, 7);

  const handleClickMonth = () => {
    navigate(`/calendar/month/${month}`);
  };

  const handleClickDay = () => {
    navigate(`/calendar/day/${day}`);
  };

  return (
    <PeriodTypeSelectStyles>
      <ButtonM type="button" onClick={handleClickMonth}>
        Month
      </ButtonM>
      <ButtonD type="button" onClick={handleClickDay}>
        Day
      </ButtonD>
    </PeriodTypeSelectStyles>
  );
};

export default PeriodTypeSelect;
