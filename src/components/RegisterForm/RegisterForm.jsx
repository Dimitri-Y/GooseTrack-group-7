import { Formik } from 'formik';
import { useState } from 'react';
import {
  Form,
  TitleForm,
  FormField,
  Field,
  SubmitBtn,
  IconButton,
  PasswordWrap,
  ToggleHidePassword,
  IconContainer,
  ErrorIcon,
  CorrectIcon,
  ErrorTag,
  CorrectTag,
} from './RegisterForm.styled';
import { useDispatch } from 'react-redux';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { register } from '../../redux/auth/authOperations';
import AuthNavigate from '../../components/AuthNavigate/AuthNavigate';
import { RegisterValidSchema } from './RegisterValidSchema';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as ShowIcon } from '../../images/svg/show.svg';
import { ReactComponent as HideIcon } from '../../images/svg/hide.svg';

const RegisterForm = () => {
  const initialState = { userName: '', email: '', password: '' };
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handelSubmit = (values) => {
    dispatch(register(values))
    .then((data) => {
        switch (data.payload) {
          case 'Request failed with status code 401':
            toast.error(`Name or email is already exist`);
            break;
          case 'Request failed with status code 409':
            toast.error(`Name or email is already exist`);
            break;
          default:
            toast.success(
              `We have sent you a verification message to your email.`,
            );
        }
    
      })
      .catch((error) => {
        toast.error(`${error}`);
      });
  };

  return (
    <>
      <Formik
        initialValues={initialState}
        onSubmit={handelSubmit}
        validationSchema={RegisterValidSchema}
      >
        {({ errors, touched }) => (
          <Form>
            <TitleForm>Sign Up</TitleForm>
            <FormField
              htmlFor="userName"
              style={{
                color:
                  (touched.userName && errors.userName && '#E74A3B') ||
                  (touched.userName && !errors.userName && '#3CBC81') ||
                  'inherit',
              }}
            >
              Name
            </FormField>
            <IconContainer>
              <Field
                type="text"
                name="userName"
                placeholder="Enter your name"
                style={{
                  borderColor:
                    (touched.userName && errors.userName && '#E74A3B') ||
                    (touched.userName && !errors.userName && '#3CBC81'),
                }}
              ></Field>
              {touched.userName && errors.userName && <ErrorIcon />}
              {touched.userName && !errors.userName && <CorrectIcon />}
            </IconContainer>
            {touched.userName && errors.userName && (
              <ErrorTag>This is an ERROR name</ErrorTag>
            )}
            {touched.userName && !errors.userName && (
              <CorrectTag>This is an CORRECT name</CorrectTag>
            )}

            <FormField
              htmlFor="email"
              style={{
                color:
                  (touched.email && errors.email && '#E74A3B') ||
                  (touched.email && !errors.email && '#3CBC81') ||
                  'inherit',
              }}
            >
              Email
            </FormField>
            <IconContainer>
              <Field
                type="email"
                name="email"
                placeholder="Enter your email"
                style={{
                  borderColor:
                    (touched.email && errors.email && '#E74A3B') ||
                    (touched.email && !errors.email && '#3CBC81'),
                }}
              />
              {touched.email && errors.email && <ErrorIcon />}
              {touched.email && !errors.email && <CorrectIcon />}
            </IconContainer>
            {touched.email && errors.email && (
              <ErrorTag>This is an ERROR email</ErrorTag>
            )}
            {touched.email && !errors.email && (
              <CorrectTag>This is an CORRECT email</CorrectTag>
            )}
            <PasswordWrap>
              <FormField
                htmlFor="password"
                style={{
                  color:
                    (touched.password && errors.password && '#E74A3B') ||
                    (touched.password && !errors.password && '#3CBC81') ||
                    'inherit',
                }}
              >
                Password
              </FormField>
              <Field
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Enter your password"
                style={{
                  borderColor:
                    (touched.password && errors.password && '#E74A3B') ||
                    (touched.password && !errors.password && '#3CBC81'),
                }}
              ></Field>
              <ToggleHidePassword type="button" onClick={handleShowPassword}>
                {showPassword ? (
                  <ShowIcon style={{ marginLeft: '10px' }} />
                ) : (
                  <HideIcon style={{ marginLeft: '10px' }} />
                )}
              </ToggleHidePassword>
            </PasswordWrap>
            {touched.password && errors.password && (
              <ErrorTag>
                Password must contain lowecase letters, uppercase letters and
                numbers
              </ErrorTag>
            )}
            {touched.password && !errors.password && (
              <CorrectTag>This is an CORRECT password</CorrectTag>
            )}
            <SubmitBtn type="submit">
              Sign Up
              <IconButton
                style={{ width: '20px', height: '20px', marginLeft: '11px' }}
              />
            </SubmitBtn>
          </Form>
        )}
      </Formik>
      <AuthNavigate navigateTo="/login">Log In</AuthNavigate>
      <ToastContainer />
    </>
  );
};

export default RegisterForm;
