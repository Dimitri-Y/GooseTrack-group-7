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
import { Formik, ErrorMessage, Field } from 'formik';
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
const API_PATCH = 'http://localhost:3000/api/users/edit';

const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MmZkMTVhODJmYTc5M2I4ZDZiNTNiMyIsImlhdCI6MTY5NzgzNTUxOSwiZXhwIjoxNjk3OTE4MzE5fQ.p4mivK7ySEng3YU-77zbNvv1OIvExBtMyOJHZrsLikQ';
// 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MzJjZDAwZDk4YjM0YzA4OGY2MjZhOCIsImlhdCI6MTY5NzgyODExNiwiZXhwIjoxNjk3OTEwOTE2fQ.jmyr2QML4aZ6ta9sHWMJzH3b5XUznKkyZM2T6ecBZMI';

const UserForm = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploaded, setUploaded] = useState();
  const [birthdayChange, setBirthdayChange] = useState(new Date());
  const [userDate, setUserDate] = useState();

  console.log(userDate);

  const filePicker = useRef(null);

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
        const data = response.data;
        setUserDate(data);
      })
      .catch((error) => {
        console.error('Помилка запиту:', error);
      });
  }, []);

  const initialValue = {
    name: userDate?.userName || '',
    number: userDate?.phone || '',
    birthday: userDate?.birthday || new Date(),
    skype: userDate?.skype || '',
    email: userDate?.email || '',
  };

  const handleClick = () => {
    filePicker.current.click();
  };

  const handleChangePhoto = (e) => {
    setUploaded(e.target.files[0]);
    const imgURL = URL.createObjectURL(e.target.files[0]);
    setSelectedImage(imgURL);
  };

  const handleChangeDate = (value) => {
    setBirthdayChange(value);
  };

  const handleSubmit = async (values) => {
    const { name, number, birthday, skype, email } = values;

    const formData = new FormData();
    formData.append('avatar', uploaded);
    formData.append('userName', name);
    formData.append('phone', number);
    formData.append('birthday', birthday);
    formData.append('skype', skype);
    formData.append('email', email);
    const res = await axios.patch(API_PATCH, formData, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        'Content-Type': 'multipart/form-data',
      },
    });

    const data = res.data;
    console.log(data);
    // console.log(birthday);
    // console.log(name);
    // console.log(number);
    // console.log(skype);
    // console.log(email);
  };

  return (
    <>
      <Formik
        initialValues={initialValue}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <AccountForm>
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
              <Input type="text" name="name" maxLength="16" required />
              <ErrorMessage name="name" />
            </Label>
            <Label>
              Phone
              <Input type="tel" name="number" />
              <ErrorMessage name="number" />
            </Label>

            <Label>
              Birthday
              <Field
                component={Calendar}
                name="birthday"
                type="date"
                selected={birthdayChange}
                onChange={handleChangeDate}
              />
              <ErrorMessage name="birthday" />
            </Label>
            <Label>
              Skype
              <Input type="text" name="skype" />
              <ErrorMessage name="skype" />
            </Label>
            <Label>
              Email
              <Input type="email" name="email" />
              <ErrorMessage name="email" />
            </Label>
          </InputBox>
          <ButtonSubmit type="submit">Save Changes</ButtonSubmit>
        </AccountForm>
      </Formik>
    </>
  );
};

export default UserForm;
