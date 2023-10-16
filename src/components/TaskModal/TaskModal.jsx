import Modal from '../Modal/Modal';
import TaskForm from '../TaskForm/TaskForm';

function TaskModal({ task, closeModal }) {
  console.log(task);
  return (
    <Modal>
      <TaskForm task={task} closeModal={closeModal}></TaskForm>
    </Modal>
  );
}
export default TaskModal;
