import { useState } from 'react';
import TaskModal from '../TaskModal/TaskModal';
import { Button } from './AddTaskBtn.styled';

const AddTaskBtn = ({ header }) => {
//   const [isOpenModal, setIsOpenModal] = useState(false);
// // 
  const [isModalActive, setIsModalActive] = useState(false);

  const handleModalOpen = () => {
    setIsModalActive(true);
  };
  const handleModalClose = () => {
    setIsModalActive(false);
  };

  // const handleClick = () => {
  //   console.log(`Click button add task to ${header}`);
  //   setIsOpenModal(true);
  // };

  return (
    <>
      <Button type="button" onClick={handleModalOpen}>
        Add task
      </Button>
      {isModalActive && <TaskModal headerCategory={header} onModalClose={handleModalClose}/>}
    </>
  );
};
export default AddTaskBtn;
