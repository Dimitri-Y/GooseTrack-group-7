import DayCalendarHead from '../DayCalendarHead/DayCalendarHead';
import TasksColumnsList from '../TasksColumnsList/TasksColumnsList';
import filter from '../../utils/filter';
import { ContainerSection } from './ChoosedDay.styled';
import { selectVisibleTasks } from '../../redux/tasks/tasksSelectors';
import { useEffect } from 'react';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchTasks } from '../../redux/tasks/tasksOperations';

const ChoosedDay = () => {
  const visibleTasks = useSelector(selectVisibleTasks);
  const dispatch = useDispatch();

  const toDo = useMemo(
    () => filter(visibleTasks, 'category', 'to-do'),
    [visibleTasks],
  );
  const inProgress = useMemo(
    () => filter(visibleTasks, 'category', 'in-progress'),
    [visibleTasks],
  );
  const done = useMemo(
    () => filter(visibleTasks, 'category', 'done'),
    [visibleTasks],
  );

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchTasks());
    };
    fetchData();
  }, [dispatch]);

  return (
    <ContainerSection>
      <DayCalendarHead></DayCalendarHead>
      <TasksColumnsList
        toDo={toDo}
        inProgress={inProgress}
        done={done}
      ></TasksColumnsList>
    </ContainerSection>
  );
};
export default ChoosedDay;
