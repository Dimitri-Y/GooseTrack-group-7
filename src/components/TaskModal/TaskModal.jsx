import Modal from '../Modal/Modal';
import TaskForm from '../TaskForm/TaskForm';

function TaskModal({ closeModal, task }) {
  console.log(closeModal, task);
  return (
    <Modal>
      <TaskForm></TaskForm>
    </Modal>
  );
}
export default TaskModal;
