import * as Yup from 'yup';

export const LoginValidSchema = Yup.object().shape({
  email: Yup.string().email('This is an ERROR email').required('Required'),
  password: Yup.string().required('Required'),
});
