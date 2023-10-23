import styled from 'styled-components';

export const ContainerTaskToolbar = styled.div`
  position: relative;
  display: flex;
  align-items: end;
  gap: 10px;

  .button {
    width: 14px;
    height: 14px;
    stroke: ${(p) => p.theme.mainTextColor};
    cursor: pointer;

    @media (min-width: 375px) {
      width: 16px;
      height: 16px;
    }
  }
`;

export const ContextMenu = styled.div`
  position: absolute;
  top: 40px;
  right: -15px;
  display: flex;
  flex-direction: column;
  align-items: start;
  z-index: 10;
  box-sizing: border-box;
  width: 115px;
  padding: 14px;
  border: ${(p) => p.theme.borderContextMenu};
  border-radius: 8px;
  background-color: ${(p) => p.theme.contexMenuBGColor};
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

  .button {
    width: 14px;
    height: 14px;
    stroke: ${(p) => p.theme.mainTextColor};

    @media (min-width: 375px) {
      width: 16px;
      height: 16px;
    }
  }
`;

export const ContextMenuItem = styled.div`
  display: flex;
  align-items: start;
  padding: 5px;
  font-size: 12px;
  color: ${(p) => p.theme.secondaryTextColor};
`;
