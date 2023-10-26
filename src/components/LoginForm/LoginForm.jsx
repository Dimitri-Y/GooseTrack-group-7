import { Formik } from 'formik';
import AuthNavigate from '../../components/AuthNavigate/AuthNavigate';
import { LoginValidSchema } from './LoginValidSchema';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/authOperations';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUserEmail } from '../../redux/auth/authSelectors';
import {
  Form,
  TitleForm,
  FormField,
  Field,
  Button,
  IconButton,
  CorrectValidate,
  InvalidValidate,
  FormFieldWrap,
  ValidErrorIcon,
  ValidCorrectIcon,
  ToggleHidePassword,
} from './LoginForm.styled';

import { ReactComponent as ShowIcon } from '../../images/svg/show.svg';
import { ReactComponent as HideIcon } from '../../images/svg/hide.svg';

const LoginForm = () => {
  const initialState = { email: '', password: '' };
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const emailLocal = useSelector(selectUserEmail);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handelSubmit = (values) => {
    dispatch(logIn(values))
      .then((data) => {
        switch (data.payload) {
          case 'Request failed with status code 401':
            toast.error(`Wrong email or password`);
            break;
          case 'Request failed with status code 409':
            toast.error(`Verify your account`);
            break;
          default:
            navigate('/calendar', { replace: true });
        }
      })
      .catch((error) => {
        toast.error(`${error}`);
      });
  };

  return (
    <>
      <Formik
        validationSchema={LoginValidSchema}
        initialValues={initialState}
        onSubmit={handelSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <TitleForm>Log In</TitleForm>
            <FormField
              style={{
                color: touched.email
                  ? errors.email
                    ? '#da1414'
                    : '#3cbc81'
                  : '#111111',
              }}
            >
              Email
              <FormFieldWrap>
                <Field
                  type="email"
                  name="email"
                  placeholder="nadiia@gmail.com"
                  style={{
                    borderColor:
                      (touched.email && errors.email && '#E74A3B') ||
                      (touched.email && !errors.email && '#3CBC81'),
                  }}
                />
                {touched.email && errors.email ? (
                  <ValidErrorIcon />
                ) : touched.email ? (
                  <ValidCorrectIcon />
                ) : null}
              </FormFieldWrap>
              {touched.email && errors.email ? (
                <InvalidValidate>{errors.email}</InvalidValidate>
              ) : touched.email ? (
                <CorrectValidate>This is a CORRECT email</CorrectValidate>
              ) : null}
            </FormField>
            <FormField
              style={{
                color: touched.password
                  ? errors.password
                    ? '#da1414'
                    : '#3cbc81'
                  : '#111111',
              }}
            >
              Password
              <FormFieldWrap>
                <Field
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="● ● ● ● ● ● ●"
                  style={{
                    borderColor:
                      (touched.password && errors.password && '#E74A3B') ||
                      (touched.password && !errors.password && '#3CBC81'),
                  }}
                />
                <ToggleHidePassword type="button" onClick={handleShowPassword}>
                  {showPassword ? (
                    <ShowIcon style={{ marginLeft: '10px' }} />
                  ) : (
                    <HideIcon style={{ marginLeft: '10px' }} />
                  )}
                </ToggleHidePassword>
              </FormFieldWrap>
              {touched.password && errors.password && (
                <InvalidValidate>{errors.password}</InvalidValidate>
              )}
            </FormField>

            <Button type="submit">
              Log in <IconButton />
            </Button>
          </Form>
        )}
      </Formik>
      <AuthNavigate navigateTo="/register">Sign up</AuthNavigate>
      {emailLocal && (
        <AuthNavigate navigateTo="/resendemail">Resend email</AuthNavigate>
      )}
      <ToastContainer />
    </>
  );
};

export default LoginForm;
