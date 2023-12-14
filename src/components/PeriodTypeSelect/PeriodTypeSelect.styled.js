import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const PeriodTypeSelectStyles = styled.div`
  display: flex;
`;

export const Button = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 82px;
  height: 34px;

  font-size: 16px;
  line-height: 18px;
  font-weight: 500;

  color: ${(p) => p.theme.buttonTypeSelectText};
  background-color: ${(p) => p.theme.buttonTypeSelectBg};

  ${(props) => {
    switch (props.$type) {
      case 'month':
        return css`
          border-right: 1px solid rgba(62, 133, 243, 0.2);
          border-top-left-radius: 8px;
          border-bottom-left-radius: 8px;
        `;
      default:
        return css`
          border-top-right-radius: 8px;
          border-bottom-right-radius: 8px;
        `;
    }
  }}

  &.active {
    color: ${(p) => p.theme.buttonTypeSelectTextActive};
    background-color: ${(p) => p.theme.buttonTypeSelectBgActive};
  }
`;
