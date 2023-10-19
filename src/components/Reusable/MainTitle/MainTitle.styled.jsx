import styled from 'styled-components';

export const MainTitleStyled = styled.h1`
  @media screen and (min-width: 1440px ) {
    font-size: 32px;
    font-weight: 700;
    color: ${p => p.theme.mainTextColor || '#111111'};
    text-shadow: 0 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04), 0 47px 355px rgba(0, 0, 0, 0.07);
    line-height: 32px
  }
`;
