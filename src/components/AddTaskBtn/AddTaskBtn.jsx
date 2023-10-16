import { useState } from 'react';
import TaskModal from '../TaskModal/TaskModal';
import { Button } from './AddTaskBtn.styled';

const AddTaskBtn = ({ header }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleClick = () => {
    console.log(`Click button add task to ${header}`);
    setIsOpenModal(true);
  };

  return (
    <>
      <Button type="button" onClick={handleClick}>
        Add task
      </Button>
      {isOpenModal && <TaskModal headerCategory={header} />}
    </>
  );
};
export default AddTaskBtn;
