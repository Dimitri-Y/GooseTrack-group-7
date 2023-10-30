import { createGlobalStyle } from 'styled-components';

import InterRegular from '../assets/fonts/Inter-Regular.ttf';
import InterMedium from '../assets/fonts/Inter-Medium.ttf';
import InterBold from '../assets/fonts/Inter-Bold.ttf';
import InterSemiBold from '../assets/fonts/Inter-SemiBold.ttf';
import InterSemiBoldItalic from '../assets/fonts/Inter-SemiBold-Italic.ttf';

import PoppinsRegular from '../assets/fonts/Poppins-Regular.ttf';
import PoppinsMedium from '../assets/fonts/Poppins-Regular.ttf';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'InterRegular';
    src: local('InterRegular'),
    url(${InterRegular}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'InterMedium';
    src: local('InterMedium'),
    url(${InterMedium}) format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'InterBold';
    src: local('InterBold'),
    url(${InterBold}) format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'InterSemiBold';
    src: local('InterSemiBold'),
    url(${InterSemiBold}) format('truetype');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'InterSemiBoldItalic';
    src: local('InterSemiBoldItalic'),
    url(${InterSemiBoldItalic}) format('truetype');
    font-weight: 600;
    font-style: italic;
  }

  @font-face {
    font-family: 'PoppinsRegular';
    src: local('PoppinsRegular'),
    url(${PoppinsRegular}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'PoppinsMedium';
    src: local('PoppinsMedium'),
    url(${PoppinsMedium}) format('truetype');
    font-weight: 500;
    font-style: normal;
  }
  
  html, body {
    font-family: 'Inter Tight', sans-serif;
    padding: 0;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    line-height: 1.4;
    background-color: ${({ theme }) => theme.mainBGColor};
    color: ${({ theme }) => theme.mainTextColor};
    transition: 
            transform 250ms cubic-bezier(0.4, 0, 0.2, 1), background-color 1s cubic-bezier(0.4, 0, 0.2, 1),
            transform 250ms cubic-bezier(0.4, 0, 0.2, 1), color 1s cubic-bezier(0.4, 0, 0.2, 1);
  }


  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  p {
    margin: 0;
  }

  ul, ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
    outline: none;
  }

  button {
    border: none;
    margin: 0;
    padding: 0;
    background-color: transparent;
    cursor: pointer;
  }

  img {
    display: block;
    width: 100%;
    height: auto;
  }
  
`;