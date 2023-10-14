import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, { Autoplay } from 'swiper';
// import { Navigation } from 'swiper';
// import 'swiper/css';
// import 'swiper/css/virtual';
// import 'swiper/css/navigation';
import { ReactComponent as ArrowLeft } from '../../images/svg/arrowBack.svg';
import { ReactComponent as ArrowRight } from '../../images/svg/arrowNext.svg';
import {
  ReviewsSection,
  ReviewsTitle,
  SliderWrapper,
  SwiperNavBox,
  SwiperNavBtn,
} from './ReviewsSlider.styed';

const ReviewsSlider = () => {
  return (
    <ReviewsSection>
      <ReviewsTitle>REVIEWS</ReviewsTitle>
      <SliderWrapper>
        <Swiper>Here will bi slides</Swiper>
      </SliderWrapper>
      <SwiperNavBox>
        <SwiperNavBtn id="my-prev-button">
          <ArrowLeft />
        </SwiperNavBtn>
        <SwiperNavBtn id="my-next-button">
          <ArrowRight />
        </SwiperNavBtn>
      </SwiperNavBox>
    </ReviewsSection>
  );
};

export default ReviewsSlider;
