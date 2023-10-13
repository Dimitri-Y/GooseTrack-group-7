import { useState, useRef } from 'react';
import axios from 'axios';
import { AiFillPlusCircle } from 'react-icons/ai';
import { Input } from './UserProfileForm.styled';

const testAPI = 'https://65292a9855b137ddc83e4f49.mockapi.io/Test2';

const UserProfileForm = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploaded, setUploaded] = useState();
  const [name, setName] = useState('Nadia')
  const [number, setNumber] = useState('')
  const [birthday, setBirthday] = useState('')
  const [skype, setSkype] = useState('')
  const [email, setEmail] = useState('')

  const filePicker = useRef(null);

  const handleInputChange = e => {
   const { name, value } = e.target;

   switch (name) {
     case 'name':
       setName(value);
       break;

     case 'number':
       setNumber(value);
       break;

       case 'birthday':
         setBirthday(value);
       break;

       case 'skype':
         setSkype(value);
       break;

       case 'email':
         setEmail(value);
       break;

     default:
       return;
   }
 };

  const handleClick = () => {
    filePicker.current.click();
  };

  const handleChangePhoto = (e) => {
    setUploaded(e.target.files[0]);
    const imgURL = URL.createObjectURL(e.target.files[0]);
    setSelectedImage(imgURL);
  };

  const handleSubmit = async (e) => {
   e.preventDefault();
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
    console.log(data);

    setUploaded(data);
  };
  return (
    <form>
      <AiFillPlusCircle
        onClick={handleClick}
        size={50}
        style={{ cursor: 'pointer' }}
      />
      <Input
        type="file"
        onChange={handleChangePhoto}
        ref={filePicker}
        accept="image/*,.png,.ipg,.jpeg,.webp"
      />

      {selectedImage && <img alt="" src={selectedImage} width="100" />}
      <label>
        User Name
        <input 
        type="text" 
        onChange={handleInputChange}
        value={name}
        name="name"
        />
      </label>
      <label>
        Phone
        <input 
        type="tel" 
        onChange={handleInputChange}
        value={number}
        name="number"
        />
      </label>
      <label>
        Birthday
        <input 
        type="date" 
        onChange={handleInputChange}
        value={birthday}
        name="birthday"
        />
      </label>
      <label>
        Skype
        <input 
        type="text" 
        onChange={handleInputChange}
        value={skype}
        name="skype"

        />
      </label>
      <label>
        Email
        <input type="email" 
        onChange={handleInputChange}
        value={email}
        name="email"

        />
      </label>
      <button type="submit" onClick={handleSubmit}>
        Save Changes
      </button>
    </form>
  );
};

export default UserProfileForm;
