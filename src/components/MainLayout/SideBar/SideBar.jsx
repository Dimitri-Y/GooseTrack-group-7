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
import { logo } from '../../../images/logo';


const SideBar = ({toggleSidebar,  isOpen  }) => {

  return (
    // <Backdrop $isOpen={isOpen } onClick={toggleSidebar}>
    <SideBarStyled $isOpen={isOpen }>
      <InnerWrapper>
        <LogoBox>
          <picture>
            {/*Webp*/}
            <source
              srcSet={`${ logo.desk1xWebp }1x, ${logo.desk2xWebp}2x, ${logo.desk3xWebp}3x`}
              type="image/webp"
              media={"min-width: 1440px"}
            />
            <source
              srcSet={`${ logo.tab1xWebp }1x, ${logo.tab2xWebp}2x, ${logo.tab3xWebp}3x`}
              type="image/webp"
              media={"min-width: 768px"}
            />
            <source
              srcSet={`${ logo.mob1xWebp }1x, ${logo.mob2xWebp}2x, ${logo.mob3xWebp}3x`}
              type="image/webp"
              media={"min-width: 280px"}
            />
            {/*Png*/}
            <source
              srcSet={`${logo.desk1xPng}1x, ${logo.desk2xPng}2x,  ${logo.desk3xPng}3x`}
              media={"min-width: 1440px"}
            />
            <source
              srcSet={`${logo.tab1xPng}1x, ${logo.tab2xPng}2x, ${logo.tab3xPng}3x`}
              media={"min-width: 768px"}
            />
            <source
              srcSet={`${logo.mob1xPng}1x, ${logo.mob2xPng}2x, ${logo.mob3xPng}3x`}
              media={"min-width: 280px"}
            />
            <Logo src={logo.desk1xPng} alt="Logo" />
          </picture>
          <LogoTitle>
            G<LogoSpan>oo</LogoSpan>seTrack
          </LogoTitle>
          <CloseBtn onClick={toggleSidebar}>
            <CloseIcon width={24} height={24}>
              <use href={icon + '#icon-close'}></use>
            </CloseIcon>
          </CloseBtn>
        </LogoBox>
        <UserNav toggleSidebar={toggleSidebar}/>
      </InnerWrapper>
      <LogoutBtn />
    </SideBarStyled>
    // </Backdrop>
  );
};

export default SideBar;