import DayCalendarHead from '../DayCalendarHead/DayCalendarHead';
import TasksColumnsList from '../TasksColumnsList/TasksColumnsList';
import filter from '../../utils/filter';
import { ContainerSection } from './ChoosedDay.styled';
import { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTasks } from '../../redux/tasks/tasksOperations';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  selectError,
  selectVisibleTasks,
} from '../../redux/tasks/tasksSelectors';

const ChoosedDay = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const visibleTasks = useSelector(selectVisibleTasks);

  const toDo = useMemo(
    () => visibleTasks && filter(visibleTasks, 'category', 'to-do'),
    [visibleTasks],
  );
  const inProgress = useMemo(
    () => visibleTasks && filter(visibleTasks, 'category', 'in-progress'),
    [visibleTasks],
  );
  const done = useMemo(
    () => visibleTasks && filter(visibleTasks, 'category', 'done'),
    [visibleTasks],
  );

  useEffect(() => {
    const fetchData = () => {
      dispatch(fetchTasks());
    };
    fetchData();
    if (error) toast.error(error);
  }, [dispatch, error]);

  return (
    <ContainerSection>
      <DayCalendarHead />
      <TasksColumnsList
        toDo={toDo}
        inProgress={inProgress}
        done={done}
      ></TasksColumnsList>
      <ToastContainer />
    </ContainerSection>
  );
};
export default ChoosedDay;
