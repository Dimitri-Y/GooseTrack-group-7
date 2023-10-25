import styled from 'styled-components';

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 255, 255, 1);
  max-width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 64px;
  padding-bottom: 64px;

  @media screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 100%;
    padding-left: 128px;
    padding-right: 128px;
    padding-bottom: 100px;
  }
`;

export const DescriptionSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 335px;

  &:not(:last-child) {
    margin-bottom: 64px;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    width: 704px;
    max-width: 704px;
    
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 1184px;
    max-width: 1184px;

    &:nth-child(2) {
      flex-direction: row-reverse;
    }
  }
`;
export const DescriptionSectionBox = styled.div`
  max-width: 335px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    width: 275px;
    max-width: 275px;
    margin-left: 0;
    margin-bottom: 48px;
  }

  @media screen and (min-width: 1440px) {
    margin-left: 77px;
    margin-bottom: 0;
  }
`;

export const DescriptionSidebarBox = styled.div`
  max-width: 335px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    width: 275px;
    max-width: 275px;
    margin-left: auto;
    margin-right: 0;
    margin-bottom: 48px;
  }

  @media screen and (min-width: 1440px) {
    margin-left: 77px;
    margin-bottom: 0;
  }
`;

export const Number = styled.h2`
  margin-top: 0;
  margin-bottom: 22px;
  font-family: Inter;
  font-weight: 700;
  font-size: 80px;
  line-height: 0.8;
  letter-spacing: -4px;
  color: rgba(62, 133, 243, 1);

  @media screen and (min-width: 768px) {
    font-size: 104px;
    line-height: 1.04;
    margin-bottom: 20px;
  }
`;
export const Text = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  max-width: 335px;
  font-family: Inter;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  color: rgb(52, 52, 52,1);

  @media screen and (min-width: 768px) {
    width: 275px;
    max-width: 275px;
  }
`;
export const Title = styled.div`
  display: inline-block;
  margin-top: 0;
  margin-bottom: 8px;
  padding: 8px 18px;
  font-family: Inter;
  font-weight: 700;
  font-size: 32px;
  line-height: 1.25;
  text-align: center;
  color: rgba(62, 133, 243, 1);
  background-color: rgba(220, 235, 247,1);
  border-radius: 44px;

  @media screen and (min-width: 768px) {
    padding: 6px 18px;
    font-size: 40px;
    line-height: 1.1;
  }
`;
export const SubTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 14px;
  font-family: Inter;
  font-weight: 700;
  font-size: 32px;
  line-height: 1.25;
  color: rgba(23, 24, 32,1);

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
    font-size: 40px;
    line-height: 1.1;
  }
`;
export const ImageWrapper = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;

export const Image = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
`;
