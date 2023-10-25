import { useState } from 'react';
import TaskModal from '../TaskModal/TaskModal';
import { Button } from './AddTaskBtn.styled';
import { ReactComponent as Plus } from '../Icons/plus-add-task.svg';

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
        <Plus className="button"/>
        <span>Add task</span>
      </Button>
      {isModalActive && (
        <TaskModal currentCategory={category} onModalClose={handleModalClose} />
      )}
    </>
  );
};
export default AddTaskBtn;
