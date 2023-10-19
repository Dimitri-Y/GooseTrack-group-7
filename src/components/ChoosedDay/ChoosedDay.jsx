import { nanoid } from 'nanoid';
import DayCalendarHead from '../DayCalendarHead/DayCalendarHead';
import TasksColumnsList from '../TasksColumnsList/TasksColumnsList';
import filter from '../../utils/filter';
import { ContainerSection } from './ChoosedDay.styled';
// import { selectVisibleTasks } from '../../redux/tasks/tasksSelectors';
// import { useEffect } from 'react';
// import { useMemo } from 'react';
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import { selectTasks } from '../../redux/tasks/tasksSelectors';
// import { fetchTasks } from '../../redux/tasks/tasksOperations';

const visibleTasks = [
  {
    id: nanoid(),
    title: 'Brainstorm ideas for new content or products',
    start: '14:30',
    end: '18:30',
    priority: 'Low',
    date: '2023-10-24',
    category: 'to-do',
  },
  {
    id: nanoid(),
    title: 'Brainstorm ideas for new content or products',
    start: '14:30',
    end: '18:30',
    priority: 'Low',
    date: '2023-10-24',
    category: 'to-do',
  },
  {
    id: nanoid(),
    title: 'Brainstorm ideas for new content or products',
    start: '14:30',
    end: '18:30',
    priority: 'Low',
    date: '2023-10-25',
    category: 'to-do',
  },
  {
    id: nanoid(),
    title: 'Brainstorm ideas for new content or products',
    start: '14:30',
    end: '18:30',
    priority: 'Low',
    date: '2023-10-25',
    category: 'to-do',
  },
  {
    id: nanoid(),
    title: 'Brainstorm ideas for new content or products',
    start: '14:30',
    end: '18:30',
    priority: 'Low',
    date: '2023-10-25',
    category: 'to-do',
  },
  {
    id: nanoid(),
    title: 'Brainstorm ideas for new content or products',
    start: '14:30',
    end: '18:30',
    priority: 'Low',
    date: '2023-10-25',
    category: 'to-do',
  },
  {
    id: nanoid(),
    title: 'Brainstorm ideas for new content or products',
    start: '14:30',
    end: '18:30',
    priority: 'Low',
    date: '2023-10-25',
    category: 'to-do',
  },
  {
    id: nanoid(),
    title: 'Review and update my portfolio',
    start: '14:30',
    end: '18:30',
    priority: 'Midium',
    date: '2023-10-25',
    category: 'to-do',
  },
  {
    id: nanoid(),
    title: 'Read and respond to emails and messages',
    start: '14:30',
    end: '18:30',
    priority: 'Low',
    date: '2023-10-25',
    category: 'in-progress',
  },
  {
    id: nanoid(),
    title: 'Conducted a successful workshop',
    start: '14:30',
    end: '18:30',
    priority: 'Hight',
    date: '2023-10-24',
    category: 'in-progress',
  },
  {
    id: nanoid(),
    title: 'Building a prototype (mock-up)',
    start: '14:30',
    end: '18:30',
    priority: 'Hight',
    date: '2023-10-25',
    category: 'in-progress',
  },
  {
    id: nanoid(),
    title: 'Refining designs based on feedback',
    start: '14:30',
    end: '18:30',
    priority: 'Midium',
    date: '2023-10-24',
    category: 'done',
  },
  {
    id: nanoid(),
    title: 'Refining designs based on feedback',
    start: '14:30',
    end: '18:30',
    priority: 'Hight',
    date: '2023-10-25',
    category: 'done',
  },
  {
    id: nanoid(),
    title: 'Refining designs based on feedback',
    start: '14:30',
    end: '18:30',
    priority: 'Midium',
    date: '2023-10-25',
    category: 'done',
  },
  {
    id: nanoid(),
    title: 'Refining designs based on feedback',
    start: '14:30',
    end: '18:30',
    priority: 'Low',
    date: '2023-10-24',
    category: 'done',
  },
];

const ChoosedDay = () => {
  // const visibleTasks = useSelector(selectVisibleTasks);
  // const dispatch = useDispatch();

  const toDo = filter(visibleTasks, 'category', 'to-do');
  const inProgress = filter(visibleTasks, 'category', 'in-progress');
  const done = filter(visibleTasks, 'category', 'done');

  // const toDo = useMemo(() => filter(visibleTasks, 'category', 'to-do'), [visibleTasks]);
  // const inProgress = useMemo(
  //   () => filter(visibleTasks, 'category', 'in-progress'),
  //   [visibleTasks],
  // );
  // const done = useMemo(() => filter(visibleTasks, 'category', 'done'), [visibleTasks]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     dispatch(fetchTasks());
  //   };
  //   fetchData();
  // }, [dispatch]);

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
