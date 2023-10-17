import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Rocket } from '../../images/svg/rocket404.svg';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
`;

export const Text = styled.p`
  font-family: 'Inter', sans-serif;
  line-height: 1.29;
  text-align: center;
  font-weight: 500;
  color: rgba(17, 17, 17, 0.7);
  opacity: 0.7;
  margin-bottom: 24px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    max-width: 398px;
    margin-bottom: 32px;
  }
`;

export const NumberWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom:20px;
`;

export const Number = styled.p`
    margin-bottom:0px;
  font-family: 'Inter', sans-serif;
  font-size: 100px;
  line-height: 1.5;
  font-weight: bold;
  color: rgba(62, 133, 243, 1);
  vertical-align: middle;

  @media screen and (min-width: 768px) {
    font-size: 200px;
    line-height: 1.25;
  }
`;

export const ContentWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 281px;
  background-color: #ffffff;
  @media screen and (min-width: 768px) {
    max-width: 503px;
  }
`;

export const StyledLink = styled(Link)`
  display: block;
  width: max-content;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -2%;
  font-weight: 600;
  margin: 0 auto;
  padding: 14px 32px;
  border-radius: 16px;
  background-color: rgba(62, 133, 243, 1);
;
  color: rgba(255, 255, 255, 1);
;

  transition: all 250ms;;

  &:hover {
    transform: scale(1.1)
  }

  @media screen and (min-width: 768px) {
    padding: 16px 48px;
    font-size: 18px;
    line-height: 1.33;
  }
`;

export const RocketStyled = styled(Rocket)`
  width: 366px;
  height: 253px;
  margin: -80px;

  @media screen and (min-width: 768px) {
    width: 369px;
    height: 346px;
    margin: -100px;
  }
`;