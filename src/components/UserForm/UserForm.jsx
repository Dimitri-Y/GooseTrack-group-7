import { useState, useRef, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectUser } from '../../redux/auth/authSelectors';
// import { refreshUser } from '../../redux/auth/authOperations';
import axios from 'axios';
import UserPhoto from './UserPhoto';
import {
  Input,
  AccountForm,
  UserName,
  User,
  ButtonSubmit,
  InputBox,
  InputFile,
  Label,
} from './UserForm.styled';
import { ErrorMessage, Field, Formik, useFormik } from 'formik';
import * as yup from 'yup';
import Calendar from './Calendar/Calendar';

const validationSchema = yup.object().shape({
  avatar: yup.mixed().test('fileType', (value) => {
    if (!value) return true;
    const allowedExtensions = [
      'image/jpg',
      'image/jpeg',
      'image/png',
      'image/webp',
    ];
    return allowedExtensions.includes(value.type);
  }),
  name: yup.string().required(`Name is required`).max(16),
  email: yup.string().email().required(`Email is required`),
  birthday: yup.date().default(() => new Date()),
  number: yup
    .string()
    .matches(/^\+380\d{9}$/, 'The number should start with +380', {
      excludeEmptyString: true,
    }),
  skype: yup.string().max(16),
});

const API = 'http://localhost:3000/api/users/current';
// const API_PATCH = 'http://localhost:3000/api/users/edit';

const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MzM5M2UzODFiOTUzMDRkZDA5MmZkNCIsImlhdCI6MTY5Nzg3OTAyMCwiZXhwIjoxNjk3OTYxODIwfQ.vC992-g3DkIMjxzFJitEmeiV51zlFIwocQzGtLW1Dik';

const UserForm = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploaded, setUploaded] = useState();
  // const [userDate, setUserDate] = useState();

  // console.log(userDate);

  const filePicker = useRef(null);

  const handleSubmit = async (values) => {
    const { name, number, birthday, skype, email } = values;

    const formData = new FormData();
    formData.append('avatar', uploaded);
    formData.append('userName', name);
    formData.append('phone', number);
    formData.append('birthday', birthday);
    formData.append('skype', skype);
    formData.append('email', email);
    // const res = await axios.patch(API_PATCH, formData, {
    //   headers: {
    //     Authorization: `Bearer ${TOKEN}`,
    //     'Content-Type': 'multipart/form-data',
    //   },
    // });

    // const data = res.data;
    // console.log(data);
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
      birthday: new Date(),
      skype: '',
      email: '',
    },
    onSubmit: values => handleSubmit(values),
    validationSchema: validationSchema,
  });

  // console.log(formik.initialValues);

  // const user = useSelector(selectUser);
  // const dispatch = useDispatch();
  // console.log(user)

  // useEffect(() => {
  //   dispatch(refreshUser());
  // }, [dispatch]);

  useEffect(() => {
    axios
      .get(API, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .then((response) => {
        const data =  response.data
        formik.setValues({name: data.userName});
      })
      .catch((error) => {
        console.error('Помилка запиту:', error);
      });
  }, []);

  const handleClick = () => {
    filePicker.current.click();
  };

  const handleChangePhoto = (e) => {
    setUploaded(e.target.files[0]);
    const imgURL = URL.createObjectURL(e.target.files[0]);
    setSelectedImage(imgURL);
  };

  return (
    <>
    <Formik 
    initialValues={formik.initialValues}
    >
    {(props) => (
      <AccountForm
      >
        <UserPhoto onClick={handleClick} selectedImage={selectedImage} />
        <InputFile
          type="file"
          name="avatar"
          onChange={handleChangePhoto}
          ref={filePicker}
          accept="image/*,.png,.ipg,.jpeg,.webp"
        />
        <UserName>User Name</UserName>
        <User>User</User>
        <InputBox>
          <Label>
            User Name
            <Input type="text" name="name" maxLength="16" required 
            onChange={props.handleChange}
            value={props.values.name}
            />
            <ErrorMessage name="name" />
          </Label>
          <Label>
            Phone
            <Input
              type="tel"
              name="number"
              onChange={props.handleChange}
            value={props.values.number}
            />
            <ErrorMessage name="number" />
          </Label>

          <Label>
            Birthday
            <Field
              component={Calendar}
              name="birthday"
              type="date"
              onChange={(value) => {
                props.setFieldValue('birthday', value)
              }}
            />
            <ErrorMessage name="birthday" />
          </Label>
          <Label>
            Skype
            <Input type="text" name="skype" 
            onChange={props.handleChange}
            value={props.values.skype}/>
            <ErrorMessage name="skype" />
          </Label>
          <Label>
            Email
            <Input type="email" name="email" 
            onChange={props.handleChange}
            value={props.values.email}/>
            <ErrorMessage name="email" />
          </Label>
        </InputBox>
        <ButtonSubmit type="submit">Save Changes</ButtonSubmit>
      </AccountForm>
      )}
      </Formik>
    </>
  );
};

export default UserForm;
