import { useState } from 'react';
import { ReactComponent as ButtonAddTask } from '../Icons/button-add-task.svg';
import { ContainerHeadBar, HeadColum } from './ColumnHeadBar.styled';
import TaskModal from '../TaskModal/TaskModal';

const ColumnHeadBar = ({ header }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleClick = () => {
    console.log('Click button add task');
    setIsOpenModal(true);
  };

  return (
    <ContainerHeadBar>
      <HeadColum>{header}</HeadColum>
      <ButtonAddTask className="button" onClick={handleClick} />
      {isOpenModal && <TaskModal headerCategory={header} />}
    </ContainerHeadBar>
  );
};
export default ColumnHeadBar;
