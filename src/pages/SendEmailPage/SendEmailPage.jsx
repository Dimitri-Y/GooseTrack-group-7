import { SendEmailContainer, Wrapper, Title, Text, CheckIcon, CheckBtn } from "./SendEmailPage.styled.jsx";

import GoBackNavigate from '../../components/Reusable/GoBackNavigate/GoBackNavigate.jsx';

const SendEmailPage = () => {
  return (
    <SendEmailContainer>
      <Wrapper>
        <CheckIcon/>
        <Title>Verified!</Title>
        <Text>You have successfully verified account</Text>
        <CheckBtn>
          <GoBackNavigate route="/login" text="OK"/>
        </CheckBtn>
      </Wrapper>
    </SendEmailContainer>
  );
};

export default SendEmailPage;
