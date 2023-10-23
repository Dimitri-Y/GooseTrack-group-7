import { useLocation } from 'react-router-dom';
import AddFeedbackBtn from "../AddFeedbackBtn/AddFeedbackBtn.jsx";
import ThemeToggler from "../ThemeToggler/ThemeToggler.jsx";
import UserInfo from "../UserInfo/UserInfo.jsx";

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
import { motivator } from '../../../images/motivator';
import MainTitle from '../../Reusable/MainTitle/MainTitle.jsx';
import {selectVisibleMessage} from '../../../redux/tasks/tasksSelectors.js'
import { useSelector } from "react-redux";

const getCurrentMainTitle = location => {
  if (location.pathname.startsWith('/account')) return 'User Profile';
  if (location.pathname.startsWith('/statistics')) return 'Statistics';
  return 'Calendar';
};

const Header = ({ toggleSidebar }) => {
  const location = useLocation();
  const currentMainTitle = getCurrentMainTitle(location);

  const hasUnfinishedTasks = useSelector(selectVisibleMessage);
  const showMessage =  hasUnfinishedTasks || true;

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
            <picture>
              <source
                srcSet={`${motivator.desk1xWebp}1x, ${motivator.desk2xWebp}2x`}
                type="image/webp"
                media={"min-width: 1440px"}
              />
              <source
                srcSet={`${motivator.desk1xPng}1x, ${motivator.desk2xPng}2x`}
                media={"min-width: 1440px"}
              />
              <ImgGoose src={motivator.desk1xPng} alt="Motivation Message" />
            </picture>
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
