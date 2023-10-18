import { Dialog } from '@headlessui/react';
import { createPortal } from 'react-dom';
import css from './modal.module.css';
import { SvgSelector } from '../Icons/SvgSelector';
const portal = document.getElementById('portal');

const Modal = ({ isModalActive, onClose, children }) => {
  return createPortal(
    <Dialog
      className={css.modal_overlay}
      open={isModalActive}
      onClose={onClose}
    >
      <Dialog.Panel className={css.modal_content}>
        <Dialog.Title className={css.modal_tittle}>
          <button type="button" className={css.xCloseBtn} onClick={onClose}>
            <SvgSelector id="xClose" className={css.iconWrapper} />
          </button>
        </Dialog.Title>
        <Dialog.Description className={css.modal_body}>{children}</Dialog.Description>

        {/* <button onClick={() => setIsOpen(false)}>Deactivate</button>
        <button onClick={() => setIsOpen(false)}>Cancel</button> */}
      </Dialog.Panel>
    </Dialog>,
    portal,
  );
};
export default Modal;
