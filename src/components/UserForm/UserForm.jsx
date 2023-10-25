import { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/authSelectors';
import { editUser } from '../../redux/auth/authOperations';
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
  birthday: yup.date(),
  number: yup
    .string()
    .matches(/^\+380\d{9}$/, 'The number should start with +380 and 9 number', {
      excludeEmptyString: true,
    }),
  skype: yup.string().max(16, 'It must be no more than 16 characters'),
});

const UserForm = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploaded, setUploaded] = useState();
  const [changePhoto, setChangePhoto] = useState(false);

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

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
    dispatch(editUser(formData));
    setChangePhoto(false);
  };

  const formik = useFormik({
    initialValues: {
      name: user?.userName || '',
      number: user?.phone || '',
      birthday: user?.birthday ? parseISO(user.birthday) : new Date(),
      skype: user?.skype || '',
      email: user?.email || '',
    },
    onSubmit: handleSubmit,
    validationSchema: validationSchema,
  });

  useEffect(() => {
    if (user) {
      setSelectedImage(user.avatarURL);
    }
  }, [user]);

  const disabledFunc = () => {
    const birthdayMonth = formatWithLeadingZeros(
      formik.values.birthday.getMonth() + 1,
    );
    const dayOfMonth = formatWithLeadingZeros(formik.values.birthday.getDate());
    const updateBirthday = `${formik.values.birthday.getFullYear()}-${birthdayMonth}-${dayOfMonth}`;

    const disabled =
      user.userName === formik.values.name &&
      user.phone === formik.values.number &&
      user.birthday === updateBirthday &&
      user.skype === formik.values.skype &&
      user.email === formik.values.email;

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
        <UserName>{user.userName || 'User Name'}</UserName>
        <User>User</User>
        <InputBox>
          <Label hasError={formik.errors.name}>
            User Name
            <Input
              type="text"
              name="name"
              maxLength="16"
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
              default={new Date()}
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
