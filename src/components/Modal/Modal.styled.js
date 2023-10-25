import styled from 'styled-components';

export const StyleModal = styled.div`
  /* .modal_overlay { */
  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.8);

  box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);

  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  /* } */

  .modal_content {
    position: relative;
    /* padding: 48px 0; */
    min-height: 290px;
    border-radius: 8px;
    border: 1px solid rgba(220, 227, 229, 0.8);
    background: ${(p) => p.theme.modalBGColor};
    box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);

    @media screen and (min-width: 768px) {
    }
  }
  .modal_tittle {
    position: absolute;
    width: 100%;
    height: 50px;
    top: 0;
    left: 0;
  }

  .xCloseBtn {
    position: absolute;
    top: 14px;
    right: 14px;
    width: 24px;
    height: 24px;
    border: none;
    background-color: transparent;
    padding: 0;
  }
  .iconWrapper {
    position: absolute;
    top: 50;
    right: 14;
    border: none;
    padding: 0;
    cursor: pointer;
    background-color: transparent;
  }
`;
