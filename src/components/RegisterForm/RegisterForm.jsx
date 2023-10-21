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
} from './RegisterForm.styled';
import { useDispatch } from 'react-redux';

import { register } from "../../redux/auth/authOperations";
import AuthNavigate from "../../components/AuthNavigate/AuthNavigate";
import { toast } from 'react-toastify';
import { RegisterValidSchema } from './RegisterValidSchema';

import { useNavigate } from 'react-router-dom';

import { ReactComponent as ShowIcon } from '../../images/svg/show.svg';
import { ReactComponent as HideIcon } from '../../images/svg/hide.svg';

const initialState = { name: '', email: '', password: '' };

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };


  return (
    <>
      <Formik
        initialValues={initialState}
        onSubmit={(values) => {
          console.log(values);
          dispatch(register(values))
            .then((data) => {
              console.log(data);
              if (data.payload?.error) {
                throw new Error('Something went wrong');
              }
              toast.success(`Success: verification email was sent`, {
                autoClose: 5000,
              });
              navigate('/', { replace: true });
            })
            .catch((error) => toast.error(`Error: ${'Registration failed'}`));
        }}
        validationSchema={RegisterValidSchema}
      >
        <Form>
          <TitleForm>Sign Up</TitleForm>
          <FormField htmlFor="name">Name</FormField>
          <Field type="text" name="name" placeholder="Enter your name"></Field>
          <FormField htmlFor="email">Email</FormField>
          <Field
            type="email"
            name="email"
            placeholder="Enter your email"
          ></Field>
          <PasswordWrap>
            <Field
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Enter your password"
            ></Field>
            <ToggleHidePassword type="button" onClick={handleShowPassword}>
              {showPassword ? (
                <ShowIcon style={{ marginLeft: '10px' }} />
              ) : (
                <HideIcon style={{ marginLeft: '10px' }} />
              )}
            </ToggleHidePassword>
          </PasswordWrap>
          <SubmitBtn type="submit">
            Sign Up
            <IconButton
              style={{ width: '20px', height: '20px', marginLeft: '11px' }}
            />
          </SubmitBtn>
        </Form>
      </Formik>
      <AuthNavigate navigateTo="/login">Log In</AuthNavigate>
    </>
  );
};

export default RegisterForm;
