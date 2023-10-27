import { useEffect } from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AddFeedbackBtn from '../AddFeedbackBtn/AddFeedbackBtn.jsx';
import ThemeToggler from '../ThemeToggler/ThemeToggler.jsx';
import UserInfo from '../UserInfo/UserInfo.jsx';

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
import { selectTasks } from '../../../redux/tasks/tasksSelectors.js';

const getCurrentMainTitle = (location) => {
  if (location.pathname.startsWith('/account')) return 'User Profile';
  if (location.pathname.startsWith('/statistics')) return 'Statistics';
  return 'Calendar';
};

const Header = ({ toggleSidebar, isOpen }) => {
  const location = useLocation();
  const currentMainTitle = getCurrentMainTitle(location);
  const currentDay = useParams();
  const onChoosedDayPage = location.pathname.startsWith('/calendar/day');
  const tasks = useSelector(selectTasks);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  const hasUndoneTasksForToday = () => {
    const tasksToday = tasks
      .filter((task) => task.date === currentDay)
      .filter((task) => task.category !== 'done');
    return tasksToday.length > 0;
  };
  const showMessage = onChoosedDayPage && hasUndoneTasksForToday;

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
                srcSet={`${motivator.desk1xWebp}1x, ${motivator.desk2xWebp}2x, ${motivator.desk3xWebp}3x`}
                type="image/webp"
                media={'min-width: 1440px'}
              />
              <source
                srcSet={`${motivator.desk1xPng}1x, ${motivator.desk2xPng}2x, ${motivator.desk3xPng}3x`}
                media={'min-width: 1440px'}
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
        <Link to="/account">
          <UserInfo />
        </Link>
      </InnerWrapper>
    </HeaderContainer>
  );
};

export default Header;
