import DayCalendarHead from "../DayCalendarHead/DayCalendarHead";
import TasksColumnsList from "../TasksColumnsList/TasksColumnsList";

function ChoosedDay() {
//   const tasks = useSelector(selectTasks);

//   const filterTasks = () => {
//     let toDo = [];
//     let inProgress = [];
//     let done = [];

//     tasks.map((task) => {
//       if (task.stage === toDo) {
//         toDo.push(task);
//       }

//       if (task.stage === inProgress) {
//         inProgress.push(task);
//       }

//       if (task.stage === done) {
//         done.push(task);
//       }
//     });
//   };

  console.log();
  return (
    <section>
      <DayCalendarHead></DayCalendarHead>
      <TasksColumnsList></TasksColumnsList>
    </section>
  );
}
export default ChoosedDay;
