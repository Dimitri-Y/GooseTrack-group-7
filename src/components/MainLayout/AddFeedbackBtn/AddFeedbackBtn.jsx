import  AddFeedbackModal  from '../AddFeedbackModal/AddFeedbackModal';
import { FeedbackBtn } from './AddFeedbackBtn.styled';
import { useState } from 'react';


const AddFeedbackBtn = () => {
  const [isModalActive, setIsModalActive] = useState(false);

const handleModalOpen = () => {
    setIsModalActive(true);
  };
  const handleModalClose = () => {
    setIsModalActive(false);
  };
    return (
      <>
        <FeedbackBtn type="button" onClick={handleModalOpen}>
          Feedback
        </FeedbackBtn>
        { isModalActive && (<AddFeedbackModal onModalClose={handleModalClose}></AddFeedbackModal>)}
  
      </>
    );
  };
  export default AddFeedbackBtn;
