import AddTaskBtn from '../AddTaskBtn/AddTaskBtn';
import ColumnHeadBar from '../ColumnHeadBar/ColumnHeadBar';
import ColumnTasksList from '../ColumnTasksList/ColumnTasksList';

function TasksColumn({ header, tasksGroup }) {
  console.log();
  return (
    <>
      <ColumnHeadBar header={header}></ColumnHeadBar>
      {tasksGroup && <ColumnTasksList></ColumnTasksList>}
      <AddTaskBtn></AddTaskBtn>
    </>
  );
}
export default TasksColumn;
