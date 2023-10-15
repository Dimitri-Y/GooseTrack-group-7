import {BoxPlus, BoxCircle, BoxPlaceholder, Image} from './User.styled'
import { ReactComponent as Human } from '../Icons/Human.svg'
import { ReactComponent as Plus } from '../Icons/Plus-elipse.svg'



const UserPhoto = ({selectedImage, onClick}) => {
  return (
    <>
      <BoxCircle onClick={onClick}>
        {selectedImage ? 
        <Image alt='' src={selectedImage}/> : 
        <BoxPlaceholder>
         <Human/>
        </BoxPlaceholder>}
        
        <BoxPlus>
         <Plus/>
      </BoxPlus>
      </BoxCircle>
      
      
    </>
  );
};

export default UserPhoto;
