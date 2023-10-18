import AddTaskBtn from '../AddTaskBtn/AddTaskBtn';
import ColumnHeadBar from '../ColumnHeadBar/ColumnHeadBar';
import ColumnTasksList from '../ColumnTasksList/ColumnTasksList';
import { ContainerColum } from './TasksColumn.styled';

const TasksColumn = ({ header, tasksGroup }) => {
  const categoryTask = tasksGroup[0]?.category;

  return (
    <ContainerColum>
      <ColumnHeadBar
        header={header}
        category={categoryTask ? categoryTask : ''}
      ></ColumnHeadBar>
      {tasksGroup && <ColumnTasksList tasks={tasksGroup}></ColumnTasksList>}
      <AddTaskBtn category={categoryTask}></AddTaskBtn>
    </ContainerColum>
  );
};
export default TasksColumn;
