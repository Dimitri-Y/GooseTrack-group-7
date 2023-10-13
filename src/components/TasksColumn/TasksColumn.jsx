import AddTaskBtn from '../AddTaskBtn/AddTaskBtn';
import ColumnHeadBar from '../ColumnHeadBar/ColumnHeadBar';
import ColumnTasksList from '../ColumnTasksList/ColumnTasksList';
import { ContainerColum } from './TasksColumn.styled';

function TasksColumn({ header, tasksGroup }) {
  console.log();
  return (
    <ContainerColum>
      <ColumnHeadBar header={header}></ColumnHeadBar>
      {tasksGroup && <ColumnTasksList tasks={tasksGroup}></ColumnTasksList>}
      <AddTaskBtn></AddTaskBtn>
    </ContainerColum>
  );
}
export default TasksColumn;
