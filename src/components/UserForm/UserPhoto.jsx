import { BoxPlus, BoxCircle, BoxPlaceholder, Image } from './UserPhoto.styled';
import { ReactComponent as Human } from '../Icons/human.svg';
import { ReactComponent as Plus } from '../Icons/plus-elipse.svg';

const UserPhoto = ({ selectedImage, onClick }) => {
  return (
    <>
      <BoxCircle onClick={onClick}>
        {selectedImage ? (
          <Image alt="" src={selectedImage}/>
        ) : (
          <BoxPlaceholder>
            <Human />
          </BoxPlaceholder>
        )}

        <BoxPlus>
          <Plus />
        </BoxPlus>
      </BoxCircle>
    </>
  );
};

export default UserPhoto;
