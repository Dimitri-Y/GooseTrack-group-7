import styled from 'styled-components';
// import styled from '@emotion/styled';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import { Form  } from 'formik';

export const FormTask = styled.div`
  display: block;
  width: 100%;
  /* margin-top: 20px; */
  padding: 15px;

  box-shadow:
    rgba(17, 17, 26, 0.1) 0px 1px 0px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px,
    rgba(17, 17, 26, 0.1) 0px 16px 48px;

  /* Form {
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding-bottom: 15px;
    font-weight: 600;
  } */

  /* Label {
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding-bottom: 15px;
    font-weight: 600;
  } */
  .form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding-bottom: 15px;
    font-weight: 600;
  }
  .label {
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding-bottom: 15px;
    font-weight: 600;
  }

  input {
    padding: 10px;
  }
`;
// export const styleForm = styled.div`
//   /* display: flex;
//   flex-direction: column;
//   gap: 2px;
//   padding-bottom: 15px;
//   font-weight: 600; */
// `;

// export const Label = styled.label`
//   display: flex;
//   flex-direction: column;
//   gap: 2px;
//   padding-bottom: 15px;
//   font-weight: 600;
// `;

export const Button = styled.button`
  display: block;

  padding: 10px;
  border: none;

  color: #fff;

  background-color: #7e57c2;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  cursor: pointer;
`
