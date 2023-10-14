import styled from 'styled-components';

export const ContainerTaskToolbar = styled.ul`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ContainerButton = styled.li`
  width: 14px;
  height: 14px;

  @media (min-width: 375px) {
    width: 16px;
    height: 16px;
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
  width: 300px;
  padding: 5px;
  background-color: #f7f6f9;
  box-shadow:
    rgba(17, 17, 26, 0.1) 0px 1px 0px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px,
    rgba(17, 17, 26, 0.1) 0px 16px 48px;
`;

export const ContextMenuItem = styled.div`
  display: flex;
  align-items: start;
  padding: 5px;
`;
