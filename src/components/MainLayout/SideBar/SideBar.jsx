import { useEffect} from 'react';
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

const disableScrolling = disable => {
  if (disable) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
};
const SideBar = ({toggleSidebar,  isOpen  }) => {
  useEffect(() => {
    disableScrolling(isOpen);
    return () => {
      disableScrolling(false);
    };
  }, [isOpen]);

  return (
    // <Backdrop $isOpen={isOpen } onClick={toggleSidebar}>
    <SideBarStyled $isOpen={isOpen }>
      <InnerWrapper>
        <LogoBox>
          <Logo src={logo} alt="Logo" />
          <LogoTitle>
            G<LogoSpan>oo</LogoSpan>seTrack
          </LogoTitle>
          <CloseBtn onClick={toggleSidebar}>
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
  );
};

export default SideBar;