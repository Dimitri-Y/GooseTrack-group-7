import { Dialog } from '@headlessui/react';
import { createPortal } from 'react-dom';
// import css from './modal.module.css';
import { SvgSelector } from '../Icons/SvgSelector';
import { StyleModal } from './Modal.styled';
const portal = document.getElementById('portal');

const Modal = ({ isModalActive, onClose, children }) => {
  return createPortal(
    <Dialog open={isModalActive} onClose={onClose}>
      <StyleModal>
        <Dialog.Panel className="modal_content">
          <Dialog.Title className="modal_tittle">
            <button type="button" className="xCloseBtn" onClick={onClose}>
              <SvgSelector id="xClose" className="iconWrapper" />
            </button>
          </Dialog.Title>
          <div className="modal_body">
            {children}
          </div>
        </Dialog.Panel>
      </StyleModal>
    </Dialog>,

    portal,
  );
};
export default Modal;
