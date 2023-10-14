import {
    Navigation,
    Panel,
    NavList,
    NavItem,
    NavItemIcon,
    NavItemName
} from './UserNav.styled.jsx';
const UserNav = () => {

    const handleNavLinkClick = () => {

    }
    return (
        <Navigation>
            <Panel>User Panel</Panel>
            <NavList>
                <NavItem
                    to="/account"
                    onClick={handleNavLinkClick}>
                    <NavItemIcon></NavItemIcon>
                    <NavItemName>My account</NavItemName>
                </NavItem>
                <NavItem
                    to="/calendar"
                    onClick={handleNavLinkClick}>
                    <NavItemIcon></NavItemIcon>
                    <NavItemName>Calendar</NavItemName>
                </NavItem>
                <NavItem
                    to="/statistics"
                    onClick={handleNavLinkClick}>
                    <NavItemIcon></NavItemIcon>
                    <NavItemName>Statistics</NavItemName>
                </NavItem>
            </NavList>
        </Navigation>
    )
}

export default UserNav;