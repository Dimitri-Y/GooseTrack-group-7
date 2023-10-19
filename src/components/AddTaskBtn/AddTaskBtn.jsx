import { useState } from 'react';
import TaskModal from '../TaskModal/TaskModal';
import { Button } from './AddTaskBtn.styled';

const AddTaskBtn = ({ category }) => {
  const [isModalActive, setIsModalActive] = useState(false);

  const handleModalOpen = () => {
    setIsModalActive(true);
  };
  const handleModalClose = () => {
    setIsModalActive(false);
  };

  return (
    <>
      <Button type="button" onClick={handleModalOpen}>
        Add task
      </Button>
      {isModalActive && (
        <TaskModal category={category} onModalClose={handleModalClose} />
      )}
    </>
  );
};
export default AddTaskBtn;
