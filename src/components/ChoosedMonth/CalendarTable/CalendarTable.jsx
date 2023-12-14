import { useNavigate } from 'react-router-dom';
import {
  GridWrapper,
  CellWrapper,
  RowInCell,
  ShowDayWrapper,
  DayWrapper,
  TaskListWrapper,
  CalendarTableMoreBtn,
} from './CalendarTable.styled';
import { MonthTaskDay } from '../MonthTaskDay/MonthTaskDay';
import { useDispatch } from 'react-redux';
import { changeDateCalendar } from '../../../redux/tasks/dateCalendarSlice';
import { useSelector } from 'react-redux';
import { selectDateCalendar } from '../../../redux/tasks/tasksSelectors';

const CalendarTable = ({ startDay, today, tasks }) => {
  const navigate = useNavigate();
  const totalDays = 42;
  const dispatch = useDispatch();
  const day = startDay.clone().subtract(1, 'day');
  const dateCalendarSelected = useSelector(selectDateCalendar);

  const daysMap = [...Array(totalDays)].map(() => day.add(1, 'day').clone());
  const isSelectedMonth = (day) => today.isSame(day, 'month');

  return (
    <>
      <GridWrapper>
        {daysMap.map((dayItem) => (
          <CellWrapper
            $isWeekday={dayItem.day() === 6 || dayItem.day() === 0}
            key={dayItem.unix()}
            $isSelectedMonth={isSelectedMonth(dayItem)}
            type="button"
            onClick={() => {
              dispatch(changeDateCalendar(dayItem.format('YYYY-MM-DD')));
              isSelectedMonth(dayItem) &&
                navigate(`/calendar/day/${dayItem.format('YYYY-MM-DD')}`);
            }}
          >
            <RowInCell $justifyContent={'flex-end'}>
              <ShowDayWrapper>
                <DayWrapper
                  $selected={
                    dateCalendarSelected === dayItem.format('YYYY-MM-DD')
                  }
                >
                  {dayItem.format('D')}
                </DayWrapper>
              </ShowDayWrapper>
              <TaskListWrapper>
                {tasks
                  .filter((task) => task.date === dayItem.format('YYYY-MM-DD'))
                  .map((tasks) => tasks)
                  .reduce((t1, t2) => t1.concat(t2), [])
                  .slice(0, 2)
                  .map((task) => (
                    <li key={task._id}>
                      <MonthTaskDay task={task} />
                    </li>
                  ))}
                {tasks
                  .filter((task) => task.date === dayItem.format('YYYY-MM-DD'))
                  .map((tasks) => tasks)
                  .reduce((t1, t2) => t1.concat(t2), []).length > 2 && (
                  <li key="more">
                    <CalendarTableMoreBtn type="button">
                      +{' '}
                      {tasks
                        .filter(
                          (task) => task.date === dayItem.format('YYYY-MM-DD'),
                        )
                        .map((tasks) => tasks)
                        .reduce((t1, t2) => t1.concat(t2), []).length - 2}{' '}
                      tasks...
                    </CalendarTableMoreBtn>
                  </li>
                )}
              </TaskListWrapper>
            </RowInCell>
          </CellWrapper>
        ))}
      </GridWrapper>
    </>
  );
};
export default CalendarTable;
