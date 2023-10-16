import styled from 'styled-components';

export const ContainerTaskToolbar = styled.div`
  position: relative;
  display: flex;
  align-items: end;
  gap: 10px;

  .button {
    width: 14px;
    height: 14px;
    cursor: pointer;

    @media (min-width: 375px) {
      width: 16px;
      height: 16px;
    }
  }
`;

export const ContextMenu = styled.div`
  position: absolute;
  top: 1px;
  left: 25px;
  display: flex;
  flex-direction: column;
  align-items: start;
  z-index: 10;
  box-sizing: border-box;
  width: 115px;
  padding: 14px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow:
    rgba(17, 17, 26, 0.1) 0px 1px 0px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px,
    rgba(17, 17, 26, 0.1) 0px 16px 48px;
`;

export const ContainerContextMenuItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  cursor: pointer;
`;

export const ContextMenuItem = styled.div`
  display: flex;
  align-items: start;
  padding: 5px;
  font-size: 12px;
  color: #343434;
`;
