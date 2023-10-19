import { Formik } from 'formik';
import { RegisterValidSchema } from './RegisterValidSchema';
import { Form, TitleForm, FormField, Field } from './RegisterForm.styled';

const RegisterForm = () => {
  return (
    <>
      <Formik validationSchema={RegisterValidSchema}>
        <Form>
          <TitleForm>Sign Up</TitleForm>
          <FormField>Name</FormField>
          <Field></Field>
          <FormField>Email</FormField>
          <Field></Field>
          <FormField>Password</FormField>
          <Field></Field>
        </Form>
      </Formik>
    </>
  );
};

export default RegisterForm;
