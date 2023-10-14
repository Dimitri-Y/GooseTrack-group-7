import {SideBarStyled} from './SideBar.styled.jsx';
import UserNav from "../UserNav/UserNav.jsx";
import LogoutBtn from '../LogoutBtn/LogoutBtn.jsx'
const SideBar = () => {
    return (
        <>
            <SideBarStyled>
                <UserNav></UserNav>
                <LogoutBtn />
            </SideBarStyled>
        </>
    )
}

export default SideBar;