import styled from 'styled-components';
import { ReactComponent as GooseMain } from '../../images/svg/GOOSE 2.svg';
import { ReactComponent as LogInIcon } from '../../images/svg/log-in-01.svg';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  position: relative;
  max-width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  min-height: 812px;
  background-color: rgba(62, 133, 243, 1);

  @media screen and (min-width: 768px) {
    min-height: 1024px;
  }
  @media screen and (min-width: 1440px) {
    min-height: 770px;
  }
`;

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Goose = styled(GooseMain)`
  display: block;
  margin: 0 auto;
  width: 142px;
  height: 142px;

  @media screen and (min-width: 768px) {
    width: 150px;
    height: 149px;
  }
`;

export const Header = styled.h1`
  font-family: 'Inter', sans-serif;
  margin-top: 2px;
  margin-bottom: 32px;
  text-align: center;
  color: rgba(255, 255, 255, 1);
  font-size: 44px;
  font-weight: bold;
  line-height: 1.09;

  @media screen and (min-width: 768px) {
    font-size: 100px;
    line-height: 1.3;
    margin-bottom: 40px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 120px;
    line-height: 1.25;
  }
`;

export const Span = styled.span`
  font-style: italic;
`;

export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;

  @media screen and (min-width: 768px) {
    justify-content: center;
    gap: 24px;
    flex-direction: row-reverse;
  }
`;

export const LinkSignUp = styled(Link)`
  display: block;
  font-family: 'Inter', sans-serif;
  color: rgba(255, 255, 255, 1);
  font-size: 14px;
  line-height: 1.29;
  font-weight: 600;
  text-decoration: underline;
  transition: all 250ms;

  &:hover {
    transform: scale(1.1);
  }
`;
export const LinkLogIn = styled(Link)`
  display: flex;
  gap: 6px;
  align-items: center;
  padding: 14px 32px;
  background-color: rgba(255, 255, 255, 1);
  border: none;
  border-radius: 16px;
  color: rgba(62, 133, 243,1);
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.29;
  letter-spacing: -2%;
  transition: all 250ms;

  &:hover {
    transform: scale(1.1);
    box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48);
  }

  @media screen and (min-width: 768px) {
    padding: 14px 22px;
  }
`;


export const Icon = styled(LogInIcon)`
  width: 18px;
  height: 18px;
`;
