import Modal from '../Modal/Modal';
import TaskForm from '../TaskForm/TaskForm';
// import { useState } from 'react';
// import TaskForm from '../TaskForm/TaskForm';

const TaskModal = ({ onModalClose }) => {
  return (
    <>
      {/* {isModalActive && ( */}
      <Modal isModalActive onClose={onModalClose}>
        <TaskForm headerCategory closeModal={onModalClose}></TaskForm>
      </Modal>
      {/* )} */}
    </>
  );
};
export default TaskModal;
