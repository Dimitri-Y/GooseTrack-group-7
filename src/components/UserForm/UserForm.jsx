import { useState, useRef, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectUser } from '../../redux/auth/authSelectors';
// import { refreshUser } from '../../redux/auth/authOperations';
import axios from 'axios';
import UserPhoto from './UserPhoto';
import DatePicker from 'react-datepicker';
import { AiOutlineDown } from 'react-icons/ai';
import {
  CalendarGlobalStyles,
  Input,
  AccountForm,
  UserName,
  User,
  ButtonSubmit,
  InputBox,
  InputFile,
  Label,
} from './UserForm.styled';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { parseISO } from 'date-fns';
import { selectToken } from '../../redux/auth/authSelectors';
import { useSelector } from 'react-redux';

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
  email: yup
    .string()
    .email('Please enter a valid email')
    .required(`Email is required`),
  birthday: yup.date().default(() => new Date()),
  number: yup
    .string()
    .matches(/^\+380\d{9}$/, 'The number should start with +380 and 9 number', {
      excludeEmptyString: true,
    }),
  skype: yup.string().max(16, 'It must be no more than 16 characters'),
});

const API = 'http://localhost:3000/api/users/current';
const API_PATCH = 'http://localhost:3000/api/users/edit';
const UserForm = () => {
  const TOKEN = useSelector(selectToken);
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploaded, setUploaded] = useState();
  const [userData, setUserData] = useState({
    userName: '',
    phone: '',
    birthday: '',
    skype: '',
    email: '',
    avatarURL: '',
  });
  const [changePhoto, setChangePhoto] = useState(false);

  const filePicker = useRef(null);

  const formatWithLeadingZeros = (value) => {
    return value.toString().padStart(2, '0');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, number, birthday, skype, email } = formik.values;

    const birthdayMonth = formatWithLeadingZeros(birthday.getMonth() + 1);
    const dayOfMonth = formatWithLeadingZeros(birthday.getDate());
    const updateBirthday = `${birthday.getFullYear()}-${birthdayMonth}-${dayOfMonth}`;
    const formData = new FormData();
    formData.append('avatarURL', uploaded);
    formData.append('userName', name);
    formData.append('phone', number);
    formData.append('birthday', updateBirthday);
    formData.append('skype', skype);
    formData.append('email', email);
    const res = await axios.patch(API_PATCH, formData, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        'Content-Type': 'multipart/form-data',
      },
    });
    const data = res.data;
    setUserData(data.user);
    setChangePhoto(false);
    console.log(data);
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
      birthday: new Date(),
      skype: '',
      email: '',
    },
    onSubmit: handleSubmit,
    validationSchema: validationSchema,
  });

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
        console.log(data);
        setUserData(data);
        formik.setValues({
          name: data.userName,
          number: data.phone,
          birthday: parseISO(data.birthday) || new Date(),
          skype: data.skype,
          email: data.email,
        });
        setSelectedImage(`${data.avatarURL}`);
      })
      .catch((error) => {
        console.error('Помилка запиту:', error);
      });
  }, []);

  const disabledFunc = () => {
    const birthdayMonth = formatWithLeadingZeros(
      formik.values.birthday.getMonth() + 1,
    );
    const dayOfMonth = formatWithLeadingZeros(formik.values.birthday.getDate());
    const updateBirthday = `${formik.values.birthday.getFullYear()}-${birthdayMonth}-${dayOfMonth}`;

    const disabled =
      userData.userName === formik.values.name &&
      userData.phone === formik.values.number &&
      userData.birthday === updateBirthday &&
      userData.skype === formik.values.skype &&
      userData.email === formik.values.email;

    return disabled;
  };

  const handleClick = () => {
    filePicker.current.click();
  };

  const handleChangePhoto = (e) => {
    setUploaded(e.target.files[0]);
    const imgURL = URL.createObjectURL(e.target.files[0]);
    setSelectedImage(imgURL);
    setChangePhoto(true);
  };

  return (
    <>
      <AccountForm onSubmit={handleSubmit}>
        <UserPhoto onClick={handleClick} selectedImage={selectedImage} />
        <InputFile
          type="file"
          name="avatar"
          onChange={handleChangePhoto}
          ref={filePicker}
          accept="image/*,.png,.ipg,.jpeg,.webp"
        />
        <UserName>{formik.values.name || 'User Name'}</UserName>
        <User>User</User>
        <InputBox>
          <Label hasError={formik.errors.name}>
            User Name
            <Input
              type="text"
              name="name"
              maxLength="16"
              required
              onChange={formik.handleChange}
              value={formik.values.name}
              hasError={formik.errors.name}
            />
            {formik.errors.name && <div>{formik.errors.name}</div>}
          </Label>
          <Label hasError={formik.errors.number}>
            Phone
            <Input
              type="tel"
              name="number"
              onChange={formik.handleChange}
              value={formik.values.number}
              hasError={formik.errors.number}
            />
            {formik.errors.number && <div>{formik.errors.number}</div>}
          </Label>

          <Label>
            Birthday
            <DatePicker
              showIcon
              selected={formik.values.birthday}
              onChange={(value) => {
                formik.setFieldValue('birthday', value);
              }}
              icon={<AiOutlineDown />}
              dateFormat={'yyyy-MM-dd'}
              calendarStartDay={1}
              customInput={<Input />}
              maxDate={new Date()}
            />
            <CalendarGlobalStyles />
          </Label>
          <Label hasError={formik.errors.skype}>
            Skype
            <Input
              type="text"
              name="skype"
              onChange={formik.handleChange}
              value={formik.values.skype}
              hasError={formik.errors.skype}
            />
            {formik.errors.skype && <div>{formik.errors.skype}</div>}
          </Label>
          <Label hasError={formik.errors.email}>
            Email
            <Input
              type="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              hasError={formik.errors.email}
            />
            {formik.errors.email && <div>{formik.errors.email}</div>}
          </Label>
        </InputBox>
        <ButtonSubmit type="submit" disabled={disabledFunc() && !changePhoto}>
          Save Changes
        </ButtonSubmit>
      </AccountForm>
    </>
  );
};

export default UserForm;
