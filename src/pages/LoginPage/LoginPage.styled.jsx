import styled from 'styled-components';
import { ReactComponent as GooseSvg } from '../../images/svg/goose_login.svg';

export const LoginContainer = styled.div`
  padding: 0 20px;
  min-height: 100vh;
  background: #dcebf7;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ImageContainer = styled.div`
  display: none;

  @media (min-width: 1280px) {
    display: block;
    width: 368px;
    height: 521px;
    position: absolute;
    bottom: 19px;
    right: 60px;
  }
`;

export const Goose = styled(GooseSvg)`
  position: absolute;
  bottom: 19px;
  right: 60px;
  width: 368px;
  height: 521px;
`;
