import { useState, useRef, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectUser } from '../../redux/auth/authSelectors';
// import { refreshUser } from '../../redux/auth/authOperations';
import axios from 'axios';
import UserPhoto from './UserPhoto';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import { AiOutlineDown } from 'react-icons/ai';
import {
  Input,
  AccountForm,
  UserName,
  User,
  ButtonSubmit,
  InputBox,
  InputFile,
  Label,
  CalendarGlobalStyles,
} from './UserForm.styled';
import { useFormik } from 'formik';
import * as yup from 'yup';

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
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MzUyN2M5M2I1ZDU5Y2QwYjk4MjRkMCIsImlhdCI6MTY5Nzk4NDMwOCwiZXhwIjoxNjk4MDY3MTA4fQ.yD4G2mmG2Za1nmcgNvg-2nD_n3Dz5Pn548zJ1nDUnh4';
const UserForm = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploaded, setUploaded] = useState();

  const filePicker = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, number, birthday, skype, email } = formik.values;

    const formData = new FormData();
    formData.append('avatarURL', uploaded);
    formData.append('userName', name);
    formData.append('phone', number);
    formData.append('birthday', birthday);
    formData.append('skype', skype);
    formData.append('email', email);
    console.log(formData);
    const res = await axios.patch(API_PATCH, formData, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        'Content-Type': 'multipart/form-data',
      },
    });

    const data = res.data;
    console.log(data);
    // console.log(name)
    // console.log(birthday)
    // console.log(email)
  };

  const formik = useFormik({
    initialValues: {
      avatar: '',
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
        formik.setValues({
          avatar: data.avatarURL,
          name: data.userName,
          number: data.phone,
          birthday: new Date(), // Припускаємо, що дата приходить у правильному форматі
          skype: data.skype,
          email: data.email,
        });
        setSelectedImage(`http://localhost:3000/${data.avatarURL}`);
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
      <AccountForm onSubmit={handleSubmit}>
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
            <Input
              type="text"
              name="name"
              maxLength="16"
              required
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </Label>
          <Label>
            Phone
            <Input
              type="tel"
              name="number"
              onChange={formik.handleChange}
              value={formik.values.number}
            />
          </Label>

          <Label>
            Birthday
            <CalendarGlobalStyles />
            <DatePicker
              showIcon
              selected={formik.values.birthday}
              onChange={(value) => {
                formik.setFieldValue('birthday', value);
              }}
              icon={<AiOutlineDown className="customDatePickerIcon" />}
              calendarIconClassName="calendarIcon"
              dateFormat={'yyyy-MM-dd'}
              calendarStartDay={1}
              customInput={<Input />}
              maxDate={new Date()}
            />
          </Label>
          <Label>
            Skype
            <Input
              type="text"
              name="skype"
              onChange={formik.handleChange}
              value={formik.values.skype}
            />
          </Label>
          <Label>
            Email
            <Input
              type="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </Label>
        </InputBox>
        <ButtonSubmit type="submit">Save Changes</ButtonSubmit>
      </AccountForm>
    </>
  );
};

export default UserForm;
