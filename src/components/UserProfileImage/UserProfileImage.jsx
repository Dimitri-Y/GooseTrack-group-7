import { useState, useRef } from 'react';
import axios from 'axios'
import { AiFillPlusCircle } from 'react-icons/ai';
import { Input } from './UserProfileImage.styled';

const testAPI = 'https://65292a9855b137ddc83e4f49.mockapi.io/Test2';

const UserProfileImage = () => {
//   const [selectedImage, setSelectedImage] = useState(null);
  const [uploaded, setUploaded] = useState();

  const filePicker = useRef(null);


  const handleClick = () => {
    filePicker.current.click();
  };

  const handleUpload = async (e) => {
   
   const formData = new FormData();
   formData.append('avatar', e.target.files[0])

   const res = await axios.post(testAPI, formData, {
      headers: {
        'Content-Type': 'multipart/form-data', 
      },
    });
   const data = await res.data;
   console.log(data)


   setUploaded(data)
  }
  return (
    <div>
      <AiFillPlusCircle
        onClick={handleClick}
        size={50}
        style={{ cursor: 'pointer' }}
      />
      <Input
        type="file"
        onChange={handleUpload}
        ref={filePicker}
        accept="image/*,.png,.ipg,.jpeg,.webp"
      />

      {uploaded && 
      <img alt='' src={uploaded.filePath}/>}
    </div>
  );
};

export default UserProfileImage;
