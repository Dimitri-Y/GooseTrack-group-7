import { Formik } from 'formik';
import AuthNavigate from '../../components/AuthNavigate/AuthNavigate';
import { LoginValidSchema } from './LoginValidSchema';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/authOperations';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
} from './LoginForm.styled';

const LoginForm = () => {
  const initialState = { email: '', password: '' };
  const dispatch = useDispatch();

  const handelSubmit = (values) => {
    dispatch(logIn(values))
      .then((data) => {
        if (data.payload?.error) {
          throw new Error('Something went wrong');
        }
        if (data.payload === 'Request failed with status code 401') {
          toast.error(`Wrong email or password`);
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
                    borderColor: touched.email
                      ? errors.email
                        ? '#da1414'
                        : '#3cbc81'
                      : 'rgba(17, 17, 17, 0.15)',
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
                  type="password"
                  name="password"
                  placeholder="● ● ● ● ● ● ●"
                  style={{
                    borderColor: touched.password
                      ? errors.password
                        ? '#da1414'
                        : '#3cbc81'
                      : 'rgba(17, 17, 17, 0.15)',
                  }}
                />
                {touched.password && errors.password ? (
                  <ValidErrorIcon />
                ) : touched.password ? (
                  <ValidCorrectIcon />
                ) : null}
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
      <ToastContainer />
    </>
  );
};

export default LoginForm;
