import Modal from '../Modal/Modal';
import TaskForm from '../TaskForm/TaskForm';
// import { useState } from 'react';
// import TaskForm from '../TaskForm/TaskForm';

const TaskModal = ({task, onModalClose, currentCategory }) => {
  return (
    <>
      {/* {isModalActive && ( */}
      <Modal isModalActive onClose={onModalClose}>
        <TaskForm headerCategory={currentCategory} task={task} closeModal={onModalClose}></TaskForm>
      </Modal>
      {/* )} */}
    </>
  );
};
export default TaskModal;
