import TaskColumnCard from '../TaskColumnCard/TaskColumnCard';

function ColumnTasksList({ tasks }) {
  console.log();
  return (
    <ul>
      {tasks && tasks.map((task) => (
        <TaskColumnCard task={task} key={task.id}></TaskColumnCard>
      ))}
    </ul>
  );
}
export default ColumnTasksList;
