import {UserInfoStyled, UserName, UserAvatar, FirstLetterIcon} from "./UserInfo.styled.jsx";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { selectUser } from "../../../redux/auth/authSelectors.js";
import {refreshUser} from "../../../redux/auth/authOperations.js";


const UserInfo = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);


  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch]);

  const getFirstLetterInUpperCase = (name) => {
    if (name.length > 0) {
      return name[0].toUpperCase();
    } else {
      return '';
    }
  };

  const displayAvatar = (avatarURL) => {
    if (avatarURL) {
      return <img src={user.avatarURL} alt="User Avatar" />
    } else {
      return  <FirstLetterIcon>{getFirstLetterInUpperCase(name)}</FirstLetterIcon>
    }
  };

  return (
    <UserInfoStyled>
      <UserName>{user.name || 'UserName'}</UserName>
      <UserAvatar>{displayAvatar}</UserAvatar>
    </UserInfoStyled>
  );
}

export default UserInfo;