function Modal({ children, closeModal }) {
  console.log();
  return (
    <div onClick={closeModal}>
      <div>{children}</div>
    </div>
  );
}
export default Modal;
