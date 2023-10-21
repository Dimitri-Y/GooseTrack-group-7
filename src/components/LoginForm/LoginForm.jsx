import { Formik } from 'formik';
import {
  Form,
  TitleForm,
  FormField,
  Field,
  Button,
  IconButton,
} from './LoginForm.styled';

const LoginForm = () => {
  return (
    <>
      <Formik>
        <Form>
          <TitleForm>Log In</TitleForm>
          <FormField>
            Email
            <Field type="email" name="email" placeholder="nadiia@gmail.com" />
          </FormField>
          <FormField>
            Password
            <Field
              type="password"
              name="password"
              placeholder="● ● ● ● ● ● ●"
            />
          </FormField>
          <Button type="submit">
            Log in <IconButton />
          </Button>
        </Form>
      </Formik>
    </>
  );
};

export default LoginForm;