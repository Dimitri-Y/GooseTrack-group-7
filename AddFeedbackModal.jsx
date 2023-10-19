
import Modal from '../../Modal/Modal';
import FeedbackForm from '../FeedbackForm/FeedbackForm';
// import { useState } from 'react';


const AddFeedbackModal = ({ onModalClose }) => {
  // const [isModalActive] = useState(false);
  return (
    <>
      <Modal onClose={onModalClose}>
        <FeedbackForm />
      </Modal>
    </>
  );
};

export default AddFeedbackModal;
