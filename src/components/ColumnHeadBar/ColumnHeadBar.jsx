import { useState } from 'react';
import { ReactComponent as ButtonAddTask } from '../Icons/button-add-task.svg';
import { ContainerHeadBar, HeadColum } from './ColumnHeadBar.styled';
import TaskModal from '../TaskModal/TaskModal';

const ColumnHeadBar = ({ header, category }) => {
  const [isModalActive, setIsModalActive] = useState(false);

  const handleModalOpen = () => {
    setIsModalActive(true);
  };
  const handleModalClose = () => {
    setIsModalActive(false);
  };

  return (
    <ContainerHeadBar>
      <HeadColum>{header}</HeadColum>
      <ButtonAddTask className="button" onClick={handleModalOpen} />
      {isModalActive && (
        <TaskModal category={category} onModalClose={handleModalClose} />
      )}
    </ContainerHeadBar>
  );
};
export default ColumnHeadBar;
