import RegisterForm from '../../components/RegisterForm/RegisterForm';
import { SingUpContainer, ImageContainer, Goose } from './RegisterPage.styled';

const RegisterPage = () => {
  return (
    <SingUpContainer>
      <RegisterForm />
      <ImageContainer>
        <Goose />
      </ImageContainer>
    </SingUpContainer>
  );
};

export default RegisterPage;
