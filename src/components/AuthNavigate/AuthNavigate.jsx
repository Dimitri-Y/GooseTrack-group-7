import React from 'react'; 
import { Link } from './AuthNavigate.styled';

const AuthNavigate = ({ navigateTo, children }) => {
  return <Link to={navigateTo}>{children}</Link>;
};

export default AuthNavigate;
