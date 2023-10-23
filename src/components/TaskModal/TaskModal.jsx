import Modal from '../Modal/Modal';
import TaskForm from '../TaskForm/TaskForm';
// import { useState } from 'react';
// import TaskForm from '../TaskForm/TaskForm';

const TaskModal = ({task, onModalClose }) => {
  return (
    <>
      {/* {isModalActive && ( */}
      <Modal isModalActive onClose={onModalClose}>
        <TaskForm headerCategory task={task} closeModal={onModalClose}></TaskForm>
      </Modal>
      {/* )} */}
    </>
  );
};
export default TaskModal;
