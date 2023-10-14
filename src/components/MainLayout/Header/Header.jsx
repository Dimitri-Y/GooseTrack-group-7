import AddFeedbackBtn from "../AddFeedbackBtn/AddFeedbackBtn.jsx";
import ThemeToggler from "../ThemeToggler/ThemeToggler.jsx";
import UserInfo from "../UserInfo/UserInfo.jsx";

import {
  HeaderContainer,
  BurgerBtn,
  Icon,
  // Navigation,
  // StyledLink,
  // IconWrapper,
} from './Header.styled.jsx';
// import sprite from '../../../assets/sprite.svg';

const Header = () => {
  return (
    <HeaderContainer>
        <BurgerBtn>
            <Icon>
               {/*svg*/}
            </Icon>
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
