import DayCalendarHead from '../DayCalendarHead/DayCalendarHead';
import TasksColumnsList from '../TasksColumnsList/TasksColumnsList';

function ChoosedDay() {
  // const tasks = useSelector(selectTasks);
  let toDo = [];
  let inProgress = [];
  let done = [];

  const tasks = [
    {
      id: 'oikjhdbsf',
      title: "'sdfvgbhnjmkl.l,kmjhgfc",
      start: '14.30',
      end: '18.30',
      priority: 'Low',
      date: '',
      category: 'to-do',
    },
    {
      id: 'wertyuikl',
      title: "'sdfvgbhnjmkl.l,kmjhgfc",
      start: '14.30',
      end: '18.30',
      priority: 'Hight',
      date: '',
      category: 'in-progress',
    },
    {
      id: 'bcfgbnmmp',
      title: 'sdfvgbhnjmkl.l,kmjhgfc',
      start: '14.30',
      end: '18.30',
      priority: 'Midium',
      date: '',
      category: 'done',
    },
  ];

  const getTasksGroup = () => {
    tasks.map((task) => {
      if (task.category === 'to-do') {
        toDo.push(task);
      }

      if (task.category === 'in-progress') {
        inProgress.push(task);
      }

      if (task.category === 'done') {
        done.push(task);
      }
    });
  };

  getTasksGroup();

  console.log();
  return (
    <section>
      <DayCalendarHead></DayCalendarHead>
      <TasksColumnsList
        toDo={toDo}
        inProgress={inProgress}
        done={done}
      ></TasksColumnsList>
    </section>
  );
}
export default ChoosedDay;
