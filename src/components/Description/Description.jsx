import React from 'react';
import { useAdaptivePicture } from '../../hooks/useAdaptivePicture';
import {
  DescriptionWrapper,
  DescriptionSection,
  DescriptionSectionBox,
  Number,
  Text,
  Title,
  SubTitle,
  ImageWrapper,
  Image,
} from './Description.styled';

import Calendar1xMobPng from '../../images/mainPage/mobile/mobile_calendar@1x.png';
import Calendar2xMobPng from '../../images/mainPage/mobile/mobile_calendar@2x.png';
import Calendar1xTabPng from '../../images/mainPage/tablet/tablet_calendar@1x.png';
import Calendar2xTabPng from '../../images/mainPage/tablet/tablet_calendar@2x.png';
import Calendar1xDeskPng from '../../images/mainPage/desktop/desktop_calendar@1x.png';
import Calendar2xDeskPng from '../../images/mainPage/desktop/desktop_calendar@2x.png';

export const Description = () => {
  const { isRetina, isMobile, isTablet, isDesktop } = useAdaptivePicture();

  return (
    <DescriptionWrapper>
      <DescriptionSection>
        <DescriptionSectionBox>
          <Number>1.</Number>
          <Title>CALENDAR</Title>
          <SubTitle>VIEW</SubTitle>
          <Text>
            GooseTrack's Calendar view provides a comprehensive overview of your
            schedule, displaying all your tasks, events, and appointments in a
            visually appealing and intuitive layout.
          </Text>
        </DescriptionSectionBox>
        <ImageWrapper>
          {isMobile && (
            <picture>
              <source
                srcSet={`${Calendar1xMobPng} 1x, ${Calendar2xMobPng} 2x`}
              />
              <Image src={`${Calendar1xMobPng}`} alt="Calendar" />
            </picture>
          )}
          {isTablet && (
            <picture>
              <source
                srcSet={`${Calendar1xTabPng} 1x, ${Calendar2xTabPng} 2x`}
                media="(min-width: 768px)"
              />
              <Image src={`${Calendar1xMobPng}`} alt="Calendar" />
            </picture>
          )}
          {isDesktop && (
            <picture>
              <source
                srcSet={`${Calendar1xDeskPng} 1x, ${Calendar2xDeskPng} 2x`}
                media="(min-width: 1280px)"
              />

              <Image src={`${Calendar1xMobPng}`} alt="Calendar" />
            </picture>
          )}
        </ImageWrapper>
      </DescriptionSection>
    </DescriptionWrapper>
  );
};

export default Description;
