import styled from 'styled-components';

export const ContainerHeadBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 35px;

  .button {
    width: 22px;
    height: 22px;
    stroke: ${(p) => p.theme.mainTextColor};
    cursor: pointer;

    @media (min-width: 375px) {
      width: 24px;
      height: 24px;
    }
  }
`;

export const HeadColum = styled.h2`
  margin: 0;
  font-size: 18px;
  line-height: 20px;
  font-weight: 900;
`;
