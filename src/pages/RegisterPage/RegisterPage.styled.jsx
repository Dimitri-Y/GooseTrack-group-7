import styled from 'styled-components';
import { ReactComponent as GooseSvg } from '../../images/svg/goose_singup.svg';


export const SingUpContainer = styled.div`
  min-height: 100vh;
  background: #dcebf7;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-top: 20px;
  padding-bottom: 20px;
`;

export const ImageContainer = styled.div`
  display: none;

  @media (min-width: 1280px) {
    display: block;
    width: 400px;
    height: 417px;
    position: absolute;
    bottom: 0;
    left: 50px;
  }
`;

export const Goose = styled(GooseSvg)`
  position: absolute;
  bottom: 0px;
  left: 50px;
  width: 352px;
  height: 329px;
`;

