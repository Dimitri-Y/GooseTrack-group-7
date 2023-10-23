import { AuthLink } from './GoBackNavigate.styled.jsx';
const GoBackNavigate = ({ route, text }) => {
  return (
    <>
      <AuthLink to={route}>{text}</AuthLink>
    </>
  )
};

export default GoBackNavigate;