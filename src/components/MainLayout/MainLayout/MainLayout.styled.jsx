import styled from 'styled-components';

export const MainLayoutStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 24px 20px 40px;
  display: flex;
  flex-direction: column;
  gap: 64px;

  @media screen and (min-width: 768px ) {
    padding: 24px 32px 18px;
  }

  @media screen and (min-width: 1440px ) {
    padding: 40px 32px 32px;
    gap: 32px;
  }
`;