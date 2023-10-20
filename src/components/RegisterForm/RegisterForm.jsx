import { Formik } from 'formik';
import { useState } from 'react';
import { RegisterValidSchema } from './RegisterValidSchema';
import {
  Form,
  TitleForm,
  FormField,
  Field,
  SubmitBtn,
  IconButton,
} from './RegisterForm.styled';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

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
          <FormField htmlFor="password">Password</FormField>
          <Field
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Enter your password"
          ></Field>
          <SubmitBtn type="submit">
            Sign Up
            <IconButton
              style={{ width: '20px', height: '20px', marginLeft: '11px' }}
            />
          </SubmitBtn>
        </Form>
      </Formik>
    </>
  );
};

export default RegisterForm;
