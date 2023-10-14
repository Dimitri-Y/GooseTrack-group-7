import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export  const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Panel = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: rgba(52, 52, 52, 0.50);
`;

export const NavList = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 8px;
`;

export const NavItemIcon = styled.svg`
  width: 20px;
  height: 20px;
`;

export const NavItemName = styled.span`
  font-weight: 600;
  font-size: 14px;
`;