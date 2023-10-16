// import { Container, Title, StyledImage } from './FirstPage.styled';
// import example from '../../assets/example.png';
// import { Button } from '../../components/TaskForm/TaskForm.styled';
import { useState } from 'react';
// import Modal from '../../components/Modal/Modal';
import { StyledButton } from './FirstPage.styled';
import TaskModal from '../../components/TaskModal/TaskModal';
// import TaskModal from '../../components/TaskModal/TaskModal';
// import TaskModal from '../../components/TaskModal/TaskModal';

// import { createPortal } from 'react-dom';
// import Modal from '../../components/';

const FirstPage = () => {
  // const [activeModal, setActiveModal] = useState(true);
  const [isModalActive, setIsModalActive] = useState(false);

  const handleModalOpen = () => {
    setIsModalActive(true);
  };
  const handleModalClose = () => {
    setIsModalActive(false);
  };
  return (
    <>
      <div>
        {/* <Container>
        <Title>First Page</Title>
        <StyledImage src={example} alt="Example" />
      </Container> */}
        <StyledButton type="button" onClick={handleModalOpen}>
          open modal
        </StyledButton>
        <StyledButton type="button" onClick={handleModalOpen}>
          open modal
        </StyledButton>
        <StyledButton type="button" onClick={handleModalOpen}>
          open modal
        </StyledButton>

        {isModalActive && (
          <TaskModal isModalActive onModalClose={handleModalClose}></TaskModal>
        )}
      </div>
      <div id="portal"></div>
    </>
  );
};

export default FirstPage;
