import DatepickerTasks from '../DatepickerTasks/DatepickerTasks';
import { Container } from './PeriodPaginator.styled';

const PeriodPaginator = () => {
  const setDate = () => {
  };

  return (
    <Container>
      <DatepickerTasks setDate={setDate} />
    </Container>
  );
};

export default PeriodPaginator;
