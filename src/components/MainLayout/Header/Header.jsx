import { useLocation } from 'react-router-dom';
import AddFeedbackBtn from "../AddFeedbackBtn/AddFeedbackBtn.jsx";
import ThemeToggler from "../ThemeToggler/ThemeToggler.jsx";
import UserInfo from "../UserInfo/UserInfo.jsx";
// import { useAdaptivePicture } from '../../../hooks/useAdaptivePicture.js';

import {
  HeaderContainer,
  BurgerTitleBox,
  BurgerBtn,
  IconMenu,
  TitleWrap,
  ImgGoose,
  TextWrap,
  Message,
  InnerWrapper,
} from './Header.styled.jsx';
import icon from '../../Icons/symbol-defs.svg';
import logo from '../../../images/logo/goose-mentor.png';
import MainTitle from '../../Reusable/MainTitle/MainTitle.jsx';

const getCurrentMainTitle = location => {
  if (location.pathname.startsWith('/account')) return 'User Profile';
  if (location.pathname.startsWith('/statistics')) return 'Statistics';
  return 'Calendar';
};

const Header = ({ toggleSidebar }) => {
  const location = useLocation();
  const currentMainTitle = getCurrentMainTitle(location);

  const showMessage =  true//tasksForCurrentDay

  // const isDesktop = useAdaptivePicture();

  return (
    <HeaderContainer>
      <BurgerTitleBox>
        <BurgerBtn onClick={toggleSidebar}>
          <IconMenu width={24} height={24}>
            <use href={icon + '#icon-menu'}></use>
          </IconMenu>
        </BurgerBtn>
        {showMessage ? (
          <TitleWrap>
            <ImgGoose src={logo} alt="Motivation Message" />
            <TextWrap>
              <MainTitle title={currentMainTitle} />
              <Message>
                <span>Let go</span> of the past and focus on the present!
              </Message>
            </TextWrap>
          </TitleWrap>
        ) : (
          <TitleWrap>
            <Message>
              <MainTitle title={currentMainTitle} />
            </Message>
          </TitleWrap>
        )}
      </BurgerTitleBox>
      <InnerWrapper>
        <AddFeedbackBtn />
        <ThemeToggler />
        <UserInfo />
      </InnerWrapper>
    </HeaderContainer>
  );
};

export default Header;
