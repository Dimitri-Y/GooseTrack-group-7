import React from 'react';
import { useAdaptivePicture } from '../../hooks/useAdaptivePicture';
import {
  DescriptionWrapper,
  DescriptionSection,
  DescriptionSectionBox,
  DescriptionSidebarBox,
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

import Sidebar1xMobPng from '../../images/mainPage/mobile/mobile_sidebar@1x.png';
import Sidebar2xMobPng from '../../images/mainPage/mobile/mobile_sidebar@2x.png';
import Sidebar1xTabPng from '../../images/mainPage/tablet/tablet_sidebar@1x.png';
import Sidebar2xTabPng from '../../images/mainPage/tablet/tablet_sidebar@2x.png';
import Sidebar1xDeskPng from '../../images/mainPage/desktop/desktop_sidebar@1x.png';
import Sidebar2xDeskPng from '../../images/mainPage/desktop/desktop_sidebar@2x.png';

import All1xMobPng from '../../images/mainPage/mobile/mobile_all@1x.png';
import All2xMobPng from '../../images/mainPage/mobile/mobile_all@2x.png';
import All1xTabPng from '../../images/mainPage/tablet/tablet_all@1xTab.png';
import All2xTabPng from '../../images/mainPage/tablet/tablet_all@2xTab.png';
import All1xDeskPng from '../../images/mainPage/desktop/desktop_all@1x.png';
import All2xDeskPng from '../../images/mainPage/desktop/desktop_all@2x.png';

export const Description = () => {
  const { isMobile, isTablet, isDesktop } = useAdaptivePicture();

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
      <DescriptionSection>
        <DescriptionSidebarBox>
          <Number>2.</Number>
          <SubTitle>SIDEBAR</SubTitle>
          <Text>
            GooseTrack offers easy access to your account settings, calendar,
            and filters. The "My Account" section allows you to manage your
            profile information and preferences, while the calendar provides a
            quick and convenient way to view your upcoming events and tasks.
          </Text>
        </DescriptionSidebarBox>
        <ImageWrapper>
          {isMobile && (
            <picture>
              <source srcSet={`${Sidebar1xMobPng} 1x, ${Sidebar2xMobPng} 2x`} />
              <Image src={`${Sidebar1xMobPng}`} alt="Calendar" />
            </picture>
          )}
          {isTablet && (
            <picture>
              <source
                srcSet={`${Sidebar1xTabPng} 1x, ${Sidebar2xTabPng} 2x`}
                media="(min-width: 768px)"
              />
              <Image src={`${Sidebar1xMobPng}`} alt="Calendar" />
            </picture>
          )}
          {isDesktop && (
            <picture>
              <source
                srcSet={`${Sidebar1xDeskPng} 1x, ${Sidebar2xDeskPng} 2x`}
                media="(min-width: 1280px)"
              />

              <Image src={`${Sidebar1xMobPng}`} alt="Calendar" />
            </picture>
          )}
        </ImageWrapper>
      </DescriptionSection>
      <DescriptionSection>
        <DescriptionSectionBox>
          <Number>3.</Number>
          <Title>ALL IN</Title>
          <SubTitle>ONE</SubTitle>
          <Text>
            GooseTrack is an all-in-one productivity tool that helps you stay on
            top of your tasks, events, and deadlines. Say goodbye to scattered
            to-do lists and hello to streamlined productivity with GooseTrack.
          </Text>
        </DescriptionSectionBox>
        <ImageWrapper>
          {isMobile && (
            <picture>
              <source srcSet={`${All1xMobPng} 1x, ${All2xMobPng} 2x`} />
              <Image src={`${All1xMobPng}`} alt="Calendar" />
            </picture>
          )}
          {isTablet && (
            <picture>
              <source
                srcSet={`${All1xTabPng} 1x, ${All2xTabPng} 2x`}
                media="(min-width: 768px)"
              />
              <Image src={`${All1xMobPng}`} alt="Calendar" />
            </picture>
          )}
          {isDesktop && (
            <picture>
              <source
                srcSet={`${All1xDeskPng} 1x, ${All2xDeskPng} 2x`}
                media="(min-width: 1280px)"
              />

              <Image src={`${All1xMobPng}`} alt="Calendar" />
            </picture>
          )}
        </ImageWrapper>
      </DescriptionSection>
    </DescriptionWrapper>
  );
};

export default Description;
