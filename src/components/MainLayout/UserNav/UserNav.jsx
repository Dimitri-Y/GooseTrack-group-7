import {
    Navigation,
    Panel,
    NavList,
    NavItem,
    NavItemIcon,
    NavItemIconFill,
    NavItemName,
} from './UserNav.styled.jsx';
import icon from '../../Icons/symbol-defs.svg';
import { useLocation } from 'react-router-dom';

const UserNav = ({toggleSidebar}) => {
    const location = useLocation();
    const handleNavLinkClick = () => {
        toggleSidebar(false);
    }
    return (
        <Navigation>
            <Panel>User Panel</Panel>
            <NavList>
                <NavItem
                    to="/account"
                    onClick={handleNavLinkClick}
                    $isActive={location.pathname.startsWith('/account')}
                >
                    <NavItemIcon>
                        <use href={icon + "#icon-user"}></use>
                    </NavItemIcon>
                    <NavItemName>My account</NavItemName>
                </NavItem>
                <NavItem
                    to="/calendar"
                    onClick={handleNavLinkClick}
                    $isActive={location.pathname.startsWith('/calendar')}
                >
                    <NavItemIcon>
                        <use href={icon + "#icon-calendar"}></use>
                    </NavItemIcon>
                    <NavItemName>Calendar</NavItemName>
                </NavItem>
                <NavItem
                    to="/statistics"
                    onClick={handleNavLinkClick}
                    $isActive={location.pathname.startsWith('/statistics')}
                >
                    <NavItemIconFill>
                        <use href={icon + "#icon-chart"}></use>
                    </NavItemIconFill>
                    <NavItemName>Statistics</NavItemName>
                </NavItem>
            </NavList>
        </Navigation>
    )
}

export default UserNav;