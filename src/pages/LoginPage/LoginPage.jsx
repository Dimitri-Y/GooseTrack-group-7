import LoginForm from '../../components/LoginForm/LoginForm';
import { LoginContainer, ImageContainer, Goose } from './LoginPage.styled';

const LoginPage = () => {
  return (
    <>
      <LoginContainer>
        <LoginForm />
        <ImageContainer>
          <Goose />
        </ImageContainer>
      </LoginContainer>
    </>
  );
};

export default LoginPage;
