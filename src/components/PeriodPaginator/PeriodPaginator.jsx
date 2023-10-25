// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import DatepickerTasks from '../DatepickerTasks/DatepickerTasks';
import { Container } from './PeriodPaginator.styled';

const PeriodPaginator = () => {
  const setDate = (date) => {
    console.log(date);
  };

  return (
    <Container>
      <DatepickerTasks setDate={setDate} />
    </Container>
  );
};

export default PeriodPaginator;
