import Modal from '../Modal/Modal';
import TaskForm from '../TaskForm/TaskForm';
// import { useState } from 'react';
// import TaskForm from '../TaskForm/TaskForm';

const TaskModal = ({ task, category, onModalClose }) => {
  return (
    <>
      {/* {isModalActive && ( */}
      <Modal isModalActive onClose={onModalClose}>
        <TaskForm task={task} category={category}></TaskForm>
      </Modal>
      {/* )} */}
    </>
  );
};
export default TaskModal;
