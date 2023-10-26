
import Modal from '../../Modal/Modal';
import FeedbackForm from '../FeedbackForm/FeedbackForm';
// import { useState } from 'react';


const AddFeedbackModal = ({ onModalClose }) => {
  return (
    <>
      <Modal isModalActive onClose={onModalClose}>
        <FeedbackForm onClose={onModalClose}/>
      </Modal>
    </>
  );
};

export default AddFeedbackModal;
