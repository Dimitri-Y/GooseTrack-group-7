import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export  const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`;

export const Panel = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: rgba(52, 52, 52, 0.50);

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const NavList = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 185px;
`;

export const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  padding: 10px 12px;
  gap: 8px;
  border-radius: 8px;
  color: rgba(52, 52, 52, 0.50);
  background-color: transparent;

  &:hover,
  &:focus {
    color: #3E85F3;
    background-color:#E3F3FF;
  }
`;

export const NavItemIcon = styled.svg`
  width: 20px;
  height: 20px;
  fill: none;
  stroke: currentColor;
  
`;

export const NavItemIconFill = styled.svg`
  width: 20px;
  height: 20px;
  fill: currentColor;
  stroke: none;
`;

export const NavItemName = styled.span`
  font-weight: 600;
  font-size: 14px;
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;