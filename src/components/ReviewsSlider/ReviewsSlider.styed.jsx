import styled from 'styled-components';

export const ReviewsSection = styled.div`
  background-color: #ffffff;
  width: 335px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 64px;
  @media screen and (min-width: 768px) {
    width: 704px;
    margin-bottom: 100px;
  }
  @media screen and (min-width: 1440px) {
    width: 1157px;
    margin-bottom: 118px;
  }
`;

export const ReviewsTitle = styled.h2`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 1.14;
  color: #3e85f3;
  text-align: center;
  margin: 0 auto 40px auto;
  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 1.1;
    margin: 0 auto 50px auto;
  }
`;

export const SwiperNavBox = styled.div`
  width: 125px;
  height: 50px;
  margin: 0 auto;
  display: flex;
  gap: 25px;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 767px) {
    width: 147px;
    height: 61px;
  }
`;

export const SwiperNavBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  width: 50px;
  height: 46px;
  cursor: pointer;
  transition: all 250ms;    
  &:hover {
    filter: drop-shadow(0px 5px 2px rgb(0 0 0 / 0.4));
    transition: all 250ms;
  }
  @media screen and (min-width: 768px) {
    width: 61px;
    height: 48px;
  }
`; 

export const SliderWrapper = styled.div`
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;
