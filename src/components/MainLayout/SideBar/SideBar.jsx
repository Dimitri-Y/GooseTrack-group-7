import {
    SideBarStyled,
    // Backdrop,
    InnerWrapper,
    LogoBox,
    Logo,
    LogoTitle,
    LogoSpan,
    CloseBtn,
    CloseIcon,
} from './SideBar.styled.jsx';
import UserNav from "../UserNav/UserNav.jsx";
import LogoutBtn from '../LogoutBtn/LogoutBtn.jsx';
import icon from '../../Icons/symbol-defs.svg';
import logo from '../../../images/logo/goose-mob.png';
const SideBar = () => {

    const closeSidebar = () => {
        // isOpen(false)
        // toggleSidebar()
    };

    return (
        // <Backdrop onClick={closeSidebar}>
            <SideBarStyled>
                <InnerWrapper>
                    <LogoBox>
                        <Logo src={logo}  alt="Logo"/>
                        <LogoTitle>
                            G<LogoSpan>oo</LogoSpan>seTrack
                        </LogoTitle>
                        <CloseBtn onClick={closeSidebar}>
                            <CloseIcon width={24} height={24}>
                                <use href={icon + '#icon-close'}></use>
                            </CloseIcon>
                        </CloseBtn>
                    </LogoBox>
                    <UserNav></UserNav>
                </InnerWrapper>
                <LogoutBtn />
            </SideBarStyled>
        // </Backdrop>
    )
}

export default SideBar;