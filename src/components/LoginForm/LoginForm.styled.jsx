import styled from 'styled-components';
import { Form as FormikForm, Field as FormikField } from 'formik';

export const Form = styled(FormikForm)`
  box-sizing: border-box;
  width: 335px;
  height: 100%;
  z-index: 2;

  background-color: #ffffff;
  border-radius: 8px;
  padding: 40px 24px;
  margin-bottom: 18px;

  @media screen and (max-width: 374px) {
    width: 90%;
  }

  @media (min-width: 768px) {
    width: 480px;
    height: 100%;
    padding: 40px;
    margin-bottom: 24px;
  }
`;

export const TitleForm = styled.h1`
  font-family: 'InterSemiBolt', sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: #3e85f3;
  margin-bottom: 32px;

  @media (min-width: 768px) {
    font-size: 24px;
    margin-bottom: 40px;
  }
`;

export const FormField = styled.label`
  display: block;
  font-family: 'InterSemiBolt', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.25;
  position: relative;

  color: #111111;
  margin-top: 24px;
  margin-bottom: 8px;

  @media (min-width: 768px) {
    font-size: 14px;
    margin-top: 18px;
    margin-top: 18px;
  }
`;

export const Field = styled(FormikField)`
  box-sizing: border-box;
  font-family: 'InterRegular', sans-serif;
  font-weight: 400;
  width: 287px;
  height: 46px;
  display: block;
  outline: none;
  padding: 14px;
  color: #111111;
  border: 1px solid rgba(17, 17, 17, 0.15);
  border-radius: 8px;
  margin-top: 10px;

  :hover,
  :focus {
    border-color: #290b78;
  }

  ::placeholder {
    font-family: 'InterSemiBolt', sans-serif;
    font-size: 16px;
    font-style: normal;
    line-height: 18px;
    color: rgba(17, 17, 17, 0.15);
  }

  @media screen and (min-width: 768px) {
    padding: 18px;
  }
`;

export const Button = styled.button`
  font-family: 'InterSemiBolt', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: -0.28px;

  padding: 14px;
  width: 100%;
  border-radius: 16px;
  background-color: #3e85f3;
  box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
  outline: none;
  color: #fff;
  margin-top: 32px;
  border: none;
`;
