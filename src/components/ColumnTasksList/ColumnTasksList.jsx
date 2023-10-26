import TaskColumnCard from '../TaskColumnCard/TaskColumnCard';
import { TasksList } from './ColumnTasksList.styled';

const ColumnTasksList = ({ tasks }) => {
  return (
    <TasksList>
      {tasks &&
        tasks.map((task) => (
          <TaskColumnCard task={task} key={task._id}></TaskColumnCard>
        ))}
    </TasksList>
  );
};
export default ColumnTasksList;
