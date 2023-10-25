import styled from 'styled-components';
import { Form as FormikForm, Field as FormikField } from 'formik';
import { ReactComponent as LoginIcon } from '../../images/svg/login.svg';
import { ReactComponent as ErrorIcon } from '../../images/svg/valid-error.svg';
import { ReactComponent as CorrectIcon } from '../../images/svg/valid-correct.svg';

export const Form = styled(FormikForm)`
  box-sizing: border-box;
  max-width: 335px;
  width: 100%;
  height: 100%;
  z-index: 2;

  background-color: #ffffff;
  border-radius: 8px;
  padding: 40px 24px;
  

  @media (min-width: 768px) {
    max-width: 480px;
    padding: 40px;
    
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
  max-width: 287px;
  width: 100%;
  height: 46px;
  display: block;
  outline: none;
  padding: 14px;
  border: 1px solid rgba(17, 17, 17, 0.15);
  border-radius: 8px;
  margin-top: 10px;

  &:hover,
  &:focus {
    border-color: rgba(17, 17, 17, 1);
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
    max-width: 400px;
  }
`;

export const Button = styled.button`
  border: transparent;
  cursor: pointer;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'InterSemiBolt', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.3;
  background: #3e85f3;
  box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48);
  border-radius: 16px;
  color: #ffffff;
  padding: 14px;
  margin-top: 32px;

  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (min-width: 768px) {
    margin-top: 48px;
    font-size: 18px;
    padding: 16px;
  }
`;

export const IconButton = styled(LoginIcon)`
  margin-left: 11px;
  width: 18px;
  height: 18px;
  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const CorrectValidate = styled.p`
  color: #3cbc81;
  font-family: 'InterRegular', sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  margin-top: 8px;
  margin-left: 18px;
`;

export const InvalidValidate = styled.p`
  color: #da1414;
  font-family: 'InterRegular', sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  margin-top: 8px;
  margin-left: 18px;
`;

export const FormFieldWrap = styled.span`
  display: block;
  position: relative;
`;

export const ValidErrorIcon = styled(ErrorIcon)`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 11px;
  right: 18px;
`;

export const ValidCorrectIcon = styled(CorrectIcon)`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 11px;
  right: 18px;
`;

export const ToggleHidePassword = styled.button`
  border: transparent;
  cursor: pointer;
  background-color: transparent;
  padding: 0;
  position: absolute;
  top: 11px;
  right: 18px;
  right: 10px;
  cursor: pointer;
`;