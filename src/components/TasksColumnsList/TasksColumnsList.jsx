import TasksColumn from '../TasksColumn/TasksColumn';
import { ContainerColumsList } from './TasksColumnsList.styled';

const TasksColumnsList = ({ toDo, inProgress, done }) => {
  console.log(inProgress);
  return (
    <ContainerColumsList>
      <TasksColumn header="To do" tasksGroup={toDo}></TasksColumn>
      <TasksColumn header="In progress" tasksGroup={inProgress}></TasksColumn>
      <TasksColumn header="Done" tasksGroup={done}></TasksColumn>
    </ContainerColumsList>
  );
};
export default TasksColumnsList;
