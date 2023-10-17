import AddFeedbackBtn from "../AddFeedbackBtn/AddFeedbackBtn.jsx";
import ThemeToggler from "../ThemeToggler/ThemeToggler.jsx";
import UserInfo from "../UserInfo/UserInfo.jsx";

import {
  HeaderContainer,
  BurgerBtn,
  IconMenu,
  // Navigation,
  // StyledLink,
  // IconWrapper,
} from './Header.styled.jsx';
import icon from "../../Icons/symbol-defs.svg";
// import sprite from '../../../assets/sprite.svg';

const Header = () => {
  return (
    <HeaderContainer>
        <BurgerBtn>
            <IconMenu width={24} height={24}>
                <use href={icon + "#icon-menu"}></use>
            </IconMenu>
        </BurgerBtn>
      <AddFeedbackBtn />
      <ThemeToggler />
      <UserInfo />


      {/*<Navigation>*/}
      {/*  <StyledLink to="/first">*/}
      {/*    <IconWrapper>*/}
      {/*      <use href={`${sprite}#icon-logo`} />*/}
      {/*    </IconWrapper>*/}
      {/*    First*/}
      {/*  </StyledLink>*/}
      {/*  <StyledLink to="/second">*/}
      {/*    <IconWrapper>*/}
      {/*      <use href={`${sprite}#icon-logo`} />*/}
      {/*    </IconWrapper>*/}
      {/*    Second*/}
      {/*  </StyledLink>*/}
      {/*</Navigation>*/}
    </HeaderContainer>
  );
};

export default Header;
