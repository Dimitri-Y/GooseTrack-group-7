import { nanoid } from 'nanoid';
import DayCalendarHead from '../DayCalendarHead/DayCalendarHead';
import TasksColumnsList from '../TasksColumnsList/TasksColumnsList';
import filter from '../../utils/filter';
import { ContainerSection } from './ChoosedDay.styled';
// import { useEffect } from 'react';
// import { useMemo } from 'react';
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import { selectTasks } from '../../redux/tasks/tasksSelectors';
// import { fetchTasks } from '../../redux/tasks/tasksOperations';

const tasks = [
  {
    id: nanoid(),
    title: 'Brainstorm ideas for new content or products',
    start: '14.30',
    end: '18.30',
    priority: 'Low',
    date: '',
    category: 'to-do',
  },
  {
    id: nanoid(),
    title: 'Brainstorm ideas for new content or products',
    start: '14.30',
    end: '18.30',
    priority: 'Low',
    date: '',
    category: 'to-do',
  },
  {
    id: nanoid(),
    title: 'Brainstorm ideas for new content or products',
    start: '14.30',
    end: '18.30',
    priority: 'Low',
    date: '',
    category: 'to-do',
  },
  {
    id: nanoid(),
    title: 'Brainstorm ideas for new content or products',
    start: '14.30',
    end: '18.30',
    priority: 'Low',
    date: '',
    category: 'to-do',
  },
  {
    id: nanoid(),
    title: 'Brainstorm ideas for new content or products',
    start: '14.30',
    end: '18.30',
    priority: 'Low',
    date: '',
    category: 'to-do',
  },
  {
    id: nanoid(),
    title: 'Brainstorm ideas for new content or products',
    start: '14.30',
    end: '18.30',
    priority: 'Low',
    date: '',
    category: 'to-do',
  },
  {
    id: nanoid(),
    title: 'Brainstorm ideas for new content or products',
    start: '14.30',
    end: '18.30',
    priority: 'Low',
    date: '',
    category: 'to-do',
  },
  {
    id: nanoid(),
    title: 'Review and update my portfolio',
    start: '14.30',
    end: '18.30',
    priority: 'Midium',
    date: '',
    category: 'to-do',
  },
  {
    id: nanoid(),
    title: 'Read and respond to emails and messages',
    start: '14.30',
    end: '18.30',
    priority: 'Low',
    date: '',
    category: 'in-progress',
  },
  {
    id: nanoid(),
    title: 'Conducted a successful workshop',
    start: '14.30',
    end: '18.30',
    priority: 'Hight',
    date: '',
    category: 'in-progress',
  },
  {
    id: nanoid(),
    title: 'Building a prototype (mock-up)',
    start: '14.30',
    end: '18.30',
    priority: 'Hight',
    date: '',
    category: 'in-progress',
  },
  {
    id: nanoid(),
    title: 'Refining designs based on feedback',
    start: '14.30',
    end: '18.30',
    priority: 'Midium',
    date: '',
    category: 'done',
  },
  {
    id: nanoid(),
    title: 'Refining designs based on feedback',
    start: '14.30',
    end: '18.30',
    priority: 'Hight',
    date: '',
    category: 'done',
  },
  {
    id: nanoid(),
    title: 'Refining designs based on feedback',
    start: '14.30',
    end: '18.30',
    priority: 'Midium',
    date: '',
    category: 'done',
  },
  {
    id: nanoid(),
    title: 'Refining designs based on feedback',
    start: '14.30',
    end: '18.30',
    priority: 'Low',
    date: '',
    category: 'done',
  },
];

const ChoosedDay = () => {
  // const tasks = useSelector(selectTasks);
  // const dispatch = useDispatch();

  const toDo = filter(tasks, 'category', 'to-do');
  const inProgress = filter(tasks, 'category', 'in-progress');
  const done = filter(tasks, 'category', 'done');

  // const toDo = useMemo(() => filter(tasks, 'category', 'to-do'), [tasks]);
  // const inProgress = useMemo(
  //   () => filter(tasks, 'category', 'in-progress'),
  //   [tasks],
  // );
  // const done = useMemo(() => filter(tasks, 'category', 'done'), [tasks]);

  // useEffect(() => {
  //   async function fetchData() {
  //     dispatch(fetchTasks());
  //   }
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
