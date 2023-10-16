import { useState, useRef } from 'react';
import axios from 'axios';
import UserPhoto from './UserPhoto'
import { Input, Box, AccountForm, UserName, User, ButtonSubmit, InputBox, InputFile, Label } from './UserForm.styled';
import { Formik, ErrorMessage  } from 'formik';

import * as yup from 'yup';

const schema = yup.object().shape({
  avatar: yup.mixed().test('fileType', (value) => {
    if (!value) return true;
    const allowedExtensions = ['image/jpg', 'image/jpeg', 'image/png', 'image/webp'];
    return allowedExtensions.includes(value.type);
  }),
  name: yup.string().required(`Це обов'язкове поле`).max(16),
  email: yup.string().email().required(),
  birthday: yup.date().default(() => new Date()),
  number: yup.string().matches(/^\+380\d{9}$/,  {  excludeEmptyString : true  }),
  skype: yup.string().max(16),
});

const testAPI = 'https://65292a9855b137ddc83e4f49.mockapi.io/Test2';

const UserForm = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploaded, setUploaded] = useState();

  const filePicker = useRef(null);

  const initialValue = {
    name: '',
    number: '',
    birthday: new Date(),
    skype: '',
    email: ''
  }


  const handleClick = () => {
    filePicker.current.click();
  };

  const handleChangePhoto = (e) => {
    setUploaded(e.target.files[0]);
    const imgURL = URL.createObjectURL(e.target.files[0]);
    setSelectedImage(imgURL);
  };

  const handleSubmit = async (value) => {
  const {name, number, birthday, skype, email} = value;

    const formData = new FormData();
    formData.append('avatar', uploaded);
    formData.append('name', name);
    formData.append('number', number);
    formData.append('birthday', birthday);
    formData.append('skype', skype);
    formData.append('email', email);

    const res = await axios.post(testAPI, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    const data = await res.data;
console.log(data)
  };
  return (
    <Box>
    <Formik onSubmit={handleSubmit} initialValues={initialValue} validationSchema={schema}>
    <AccountForm>
        
      <UserPhoto onClick={handleClick} selectedImage={selectedImage}/>
      <InputFile
        type="file"
        name='avatar'
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
        />
        <ErrorMessage name='name'/>
      </Label>
      <Label>
        Phone
        <Input  
        type="tel" 
        name="number"
        pattern="/^(\+380\d{9})$/"
        />
        <ErrorMessage name='number'/>
      </Label>
      <Label>
        Birthday
        <Input  
        type="date" 
        name="birthday"
        />
        <ErrorMessage name='birthday'/>
      </Label>
      <Label>
        Skype
        <Input  
        type="text" 
        name="skype"
        />
        <ErrorMessage name='skype'/>

      </Label>
      <Label>
        Email
        <Input  type="email" 
        name="email"
        pattern='([A-zА-я])+([0-9\-_\+\.])*([A-zА-я0-9\-_\+\.])*@([A-zА-я])+([0-9\-_\+\.])*([A-zА-я0-9\-_\+\.])*[\.]([A-zА-я])+'

        />
        <ErrorMessage name='email'/>

      </Label>
      </InputBox>
      <ButtonSubmit type="submit">
        Save Changes
      </ButtonSubmit>
    </AccountForm>
    </Formik>
    </Box>
  );
};

export default UserForm;
