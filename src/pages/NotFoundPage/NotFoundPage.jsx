import React from 'react';
import {
  ContentWrap,
  NumberWrap,
  Wrapper,
  Number,
  RocketStyled,
  Text,
  StyledLink,
} from './NotFoundPage.styled';

const NotFoundPage = () => {
  return (
      <Wrapper>
      <ContentWrap>
        <NumberWrap>
          <Number>4</Number>
          <RocketStyled />
          <Number>4</Number>
        </NumberWrap>
        <Text>
          We’re sorry, the page you requested could not be found. Please go back
          to the homepage.
        </Text>
        <StyledLink to="/">Back to home</StyledLink>
      </ContentWrap>
    </Wrapper>
  );
};

export default NotFoundPage;