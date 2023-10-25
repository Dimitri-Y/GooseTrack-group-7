import { useSelector } from 'react-redux';
import { selectUserEmail } from '../../redux/auth/authSelectors';
import AuthNavigate from '../../components/AuthNavigate/AuthNavigate';
import { verificationEmail } from '../../redux/auth/authOperations';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  ResendEmailContainer,
  Wrapper,
  Title,
  Text,
  CheckIcon,
  CheckBtn,
} from './ResendEmailPage.styled';

const ResendEmailPage = () => {
  const email = useSelector(selectUserEmail);
  const dispatch = useDispatch();

  const initialState = {
    email,
  };

  const handleSubmit = () => {
    dispatch(verificationEmail(initialState))
      .then((data) => {
        switch (data.payload.message) {
          case 'Verify email resend success':
            toast.success(`The letter has been resent!`);
            break;
          default:
        }
      })
      .catch((error) => {
        toast.error(`${error}`);
      });
  };

  return (
    <ResendEmailContainer>
      <Wrapper>
        <CheckIcon />
        <Title>Didn't receive an email for verification?</Title>
        <Text>
          Would you like to resend your verification email to {email}?
        </Text>
        <CheckBtn type="submit" onClick={handleSubmit}>
          Resend email
        </CheckBtn>
      </Wrapper>
      <AuthNavigate navigateTo="/login">Login</AuthNavigate>
      <ToastContainer />
    </ResendEmailContainer>
  );
};

export default ResendEmailPage;
