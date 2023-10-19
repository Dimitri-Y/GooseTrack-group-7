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

const UserNav = ({toggleSidebar}) => {
    const handleNavLinkClick = () => {
        toggleSidebar(false);
    }
    return (
        <Navigation>
            <Panel>User Panel</Panel>
            <NavList>
                <NavItem
                    to="/account"
                    onClick={handleNavLinkClick}>
                    <NavItemIcon>
                        <use href={icon + "#icon-user"}></use>
                    </NavItemIcon>
                    <NavItemName>My account</NavItemName>
                </NavItem>
                <NavItem
                    to="/calendar"
                    onClick={handleNavLinkClick}>
                    <NavItemIcon>
                        <use href={icon + "#icon-calendar"}></use>
                    </NavItemIcon>
                    <NavItemName>Calendar</NavItemName>
                </NavItem>
                <NavItem
                    to="/statistics"
                    onClick={handleNavLinkClick}>
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