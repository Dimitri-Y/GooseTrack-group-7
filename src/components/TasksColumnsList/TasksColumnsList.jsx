import TasksColumn from '../TasksColumn/TasksColumn';

function TasksColumnsList() {
  console.log();
  return (
    <>
      <TasksColumn stage="toDo"></TasksColumn>
      <TasksColumn stage="inProgress"></TasksColumn>
      <TasksColumn stage="done"></TasksColumn>
    </>
  );
}
export default TasksColumnsList;
