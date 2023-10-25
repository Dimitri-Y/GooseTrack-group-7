import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import {
  GridWrapper,
  CellWrapper,
  RowInCell,
  ShowDayWrapper,
  DayWrapper,
  CurrentDay,
  TaskListWrapper,
  CalendarTableMoreBtn,
  TaskItem,
} from './CalendarTable.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchTasks } from '../../../redux/tasks/tasksOperations';
import { MonthTaskDay } from '../MonthTaskDay/MonthTaskDay';
import {
  selectDateCalendar,
  selectTasks,
} from '../../../redux/tasks/tasksSelectors';

const TOTAL_CELLS = 42;

const CalendarTable = ({ startDay }) => {
  const navigate = useNavigate();
  const dateCalendar = useSelector(selectDateCalendar);
  const date = dateCalendar.toISOString().slice(0, 10);
  const day = startDay.clone().subtract(1, 'day');
  const dayCellsInCalendar = [...Array(TOTAL_CELLS)]?.map(() =>
    day.add(1, 'day').clone(),
  );

  const isCurrentDay = (day) => moment().isSame(day, 'day');
  const isSelectedMonth = (day) => moment(date).isSame(day, 'month');

  const tasks = useSelector(selectTasks);

  const setDayTask = (dayItem) => {
    return tasks
      ?.filter(
        (task) =>
          task?.date >= dayItem.format('YYYY-MM-DD') &&
          task?.date <= dayItem.clone().endOf('day').format('YYYY-MM-DD'),
      )
      .map((task) => (
        <li key={task._id}>
          <TaskItem $priority={task.priority}>{task.title}</TaskItem>
        </li>
      ));
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);
  return (
    <GridWrapper>
      {dayCellsInCalendar?.((dayItem) => {
        const dayTasks = setDayTask(dayItem);
        return (
          <CellWrapper
            style={{
              color: `${
                isSelectedMonth(dayItem)
                  ? ' rgba(255, 255, 255, 0.5);'
                  : 'rgba(169, 169, 169, 0.4)'
              }`,
            }}
            isWeekday={dayItem.day() === 6 || dayItem.day() === 0}
            key={dayItem.unix()}
            isSelectedMonth={isSelectedMonth(dayItem)}
            type="button"
            onClick={() =>
              isSelectedMonth(dayItem) &&
              navigate(`/calendar/day/${dayItem.format('YYYY-MM-DD')}`)
            }
          >
            <RowInCell justifyContent={'flex-end'}>
              <ShowDayWrapper>
                <DayWrapper>
                  {isCurrentDay(dayItem) ? (
                    <CurrentDay>{dayItem.format('D')}</CurrentDay>
                  ) : (
                    dayItem.format('D')
                  )}
                </DayWrapper>
              </ShowDayWrapper>
              <TaskListWrapper>
                {dayTasks.slice(0, 2).map((task) => (
                  <li key={task._id}>
                    <MonthTaskDay task={task} />
                  </li>
                ))}
                {dayTasks
                  .map((tasks) => tasks.tasks)
                  .reduce((t1, t2) => t1.concat(t2), []).length > 2 && (
                  <li key="more">
                    <CalendarTableMoreBtn type="button">
                      +{' '}
                      {setDayTask(dayItem)
                        .map((tasks) => tasks.tasks)
                        .reduce((t1, t2) => t1.concat(t2), []).length - 2}{' '}
                      tasks...
                    </CalendarTableMoreBtn>
                  </li>
                )}
              </TaskListWrapper>
            </RowInCell>
          </CellWrapper>
        );
      })}
    </GridWrapper>
  );
};

export default CalendarTable;
