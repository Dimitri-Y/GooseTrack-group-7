import styled from 'styled-components';

export const ReviewsSection = styled.div`
  background-color: rgba(255, 255, 255, 1);
  max-width: 100%;
  /* width: 100%; */
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 64px;
  @media screen and (min-width: 768px) {
    padding-left: 94px;
    padding-right: 94px;
    margin-bottom: 100px;
  }
  @media screen and (min-width: 1440px) {
    padding-left: 128px;
    padding-right: 128px;
    margin-bottom: 118px;
  }
`;

export const ReviewsTitle = styled.h2`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 1.14;
  color: rgba(62, 133, 243, 1);
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

export const ReviewSliderCard = styled.div`
  min-height: 210px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  border-radius: 8px;
  border: 1px solid rgba(231, 229, 229,1);
  padding: 24px;
  overflow-y: auto;

  @media screen and (min-width: 768px) {
    padding: 32px 32px 32px 32px;
    gap: 18px;
  }
`;

export const ReviewContentBox = styled.div`
  position: sticky;
  top: 0px;
  display: flex;
  background-color: rgba(255, 255, 255, 1);
`;

export const AvatarWrapper = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid rgba(97, 97, 97,1);
  margin-right: 18px;
  overflow: hidden;
`;

export const AvatarImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const BackgroundName = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    0deg,
    rgba(228, 216, 30, 0.7147233893557423) 9%,
    rgba(241, 255, 13, 0.8155637254901961) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserNameIcon = styled.p`
  font-size: 18px;
  font-weight: 700;
  line-height: 1.3;

  color: black;
`;

export const Name = styled.h1`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 1;
  color: rgba(19, 21, 26,1);
`;

export const Rate = styled.div`
  width: 110px;
  height: 14px;
  margin-top: 11px;
`;

export const ReviewText = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  color: rgba(17, 17, 17, 0.7);
  @media screen and (min-width: 768px) {
    margin-left: 68px;
  }
`;