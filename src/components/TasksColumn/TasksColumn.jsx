import AddTaskBtn from '../AddTaskBtn/AddTaskBtn';
import ColumnHeadBar from '../ColumnHeadBar/ColumnHeadBar';
import ColumnTasksList from '../ColumnTasksList/ColumnTasksList';
import { ContainerColum } from './TasksColumn.styled';

const TasksColumn = ({ header, tasksGroup }) => {
  
  return (
    <ContainerColum>
      <ColumnHeadBar header={header}></ColumnHeadBar>
      {tasksGroup && <ColumnTasksList tasks={tasksGroup}></ColumnTasksList>}
      <AddTaskBtn header={header}></AddTaskBtn>
    </ContainerColum>
  );
};
export default TasksColumn;
