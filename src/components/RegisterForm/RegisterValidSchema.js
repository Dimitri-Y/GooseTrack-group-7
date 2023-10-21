import * as Yup from 'yup';

const matchPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,}$/;

export const RegisterValidSchema = Yup.object().shape({
  userName: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .matches(
      matchPassword,
      'The password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, and one number.',
    )
    .required('Required'),
});
