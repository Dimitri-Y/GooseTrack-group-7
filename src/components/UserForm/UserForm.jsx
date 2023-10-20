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
  number: yup.string().matches(/^\+380\d{9}$/, 'The number should start with +380', { excludeEmptyString: true }),
  skype: yup.string().max(16),
});

const API = 'http://localhost:3000/api/users/current';
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MzI3MjAwNzVjZTI4NDhlNjc0YmI5YyIsImlhdCI6MTY5NzgwNDgwNSwiZXhwIjoxNjk3ODg3NjA1fQ.uE6ODYa3bFFUD3nEGktQ0X1SsMrA8l-tTDmUHSY3bMs";

const UserForm = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploaded, setUploaded] = useState();
  const [birthdayChange, setBirthdayChange] = useState(new Date());
  const [initialValue, setInitialValue] = useState({
    name: "",
    number: '',
    birthday: birthdayChange,
    skype: '',
    email: '',
  });

  const filePicker = useRef(null);

  // const user = useSelector(selectUser);
  // const dispatch = useDispatch();
  // console.log(user)
  
  // useEffect(() => {
  //   dispatch(refreshUser());
  // }, [dispatch]);

  useEffect(() => {
    axios.get(API, {
      headers: {
        'Authorization': `Bearer ${TOKEN}`,
      },
    }).then(response => {
      const data = response.data;
      setInitialValue({
        name: data.userName || "",
        number: data.phoneNumber || "",
        birthday: data.birthday || birthdayChange,
        skype: data.skype || "",
        email: data.email || "",
      });
    })
    .catch(error => {
      console.error('Помилка запиту:', error);
    });
  }, [birthdayChange])

  // const initialValue = {
  //   name: "",
  //   number: '',
  //   birthday: birthdayChange,
  //   skype: '',
  //   email: '',
  // };

  const handleClick = () => {
    filePicker.current.click();
  };

  const handleChangePhoto = (e) => {
    setUploaded(e.target.files[0]);
    const imgURL = URL.createObjectURL(e.target.files[0]);
    setSelectedImage(imgURL);
  };

  const handleChangeDate = value => {
    setBirthdayChange(value)
  }

  const handleSubmit = async (value) => {
    const { name, number, skype, email } = value;

    const formData = new FormData();
    formData.append('avatar', uploaded);
    formData.append('name', name);
    formData.append('number', number);
    formData.append('birthday', birthdayChange);
    formData.append('skype', skype);
    formData.append('email', email);

    // const res = await axios.post(API, formData, {
    //   headers: {
    //     'Content-Type': 'multipart/form-data',
    //   },
    // });

    // const data = await res.data;
    console.log(birthdayChange)

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
              <Input
                type="tel"
                name="number"
              />
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
              <Input
                type="email"
                name="email"
                pattern="/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/"
              />
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
