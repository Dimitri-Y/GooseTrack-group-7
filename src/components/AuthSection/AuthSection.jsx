import React from 'react';
import {
  Container,
  Goose,
  Wrapper,
  Span,
  Header,
  LinksWrapper,
  Icon,
  LinkSignUp,
  LinkLogIn,
} from './AuthSection.styled';

const AuthSection = () => {
  return (
    <Container>
      <Wrapper>
        <Goose />
        <Header>
          <Span>Goose</Span>Track
        </Header>
        <LinksWrapper>
          <LinkLogIn>
            Log in
            <Icon />
          </LinkLogIn>
          <LinkSignUp>Sign up</LinkSignUp>
        </LinksWrapper>
      </Wrapper>
    </Container>
  );
};

export default AuthSection;
