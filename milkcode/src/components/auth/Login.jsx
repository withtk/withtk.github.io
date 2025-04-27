import * as Form from '@radix-ui/react-form';
import styled from 'styled-components';
import { blackA, blue, indigo, mauve, red } from '@radix-ui/colors';

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    console.log('로그인 데이터:', data);
  };

  return (
    <SplitContainer>
      <ImageSection>
        <OverlayContent>
          <WelcomeTitle>Seven Sisters</WelcomeTitle>
          <WelcomeText>
            자연의 아름다움을 경험하세요.<br />
            함께하는 여정에 초대합니다.
          </WelcomeText>
        </OverlayContent>
      </ImageSection>
      
      <FormSection>
        <FormContent>
          <LogoContainer>
            <Logo>MY APP</Logo>
          </LogoContainer>
          
          <FormTitle>계정 접속</FormTitle>
          <FormSubtitle>정보를 입력하여 로그인하세요</FormSubtitle>
          
          <FormRoot onSubmit={handleSubmit}>
            <FormField name="email">
              <FormLabel>이메일</FormLabel>
              <FormControl asChild>
                <input type="email" required placeholder="이메일을 입력하세요" />
              </FormControl>
              <FormMessage match="valueMissing">
                이메일을 입력해주세요
              </FormMessage>
              <FormMessage match="typeMismatch">
                유효한 이메일 주소를 입력해주세요
              </FormMessage>
            </FormField>

            <FormField name="password">
              <FormLabel>비밀번호</FormLabel>
              <FormControl asChild>
                <input type="password" required placeholder="비밀번호를 입력하세요" />
              </FormControl>
              <FormMessage match="valueMissing">
                비밀번호를 입력해주세요
              </FormMessage>
            </FormField>

            <ForgotPassword href="#">비밀번호를 잊으셨나요?</ForgotPassword>

            <FormSubmit>로그인</FormSubmit>
          </FormRoot>
          
          <SignupText>
            계정이 없으신가요? <SignupLink href="#">회원가입</SignupLink>
          </SignupText>
        </FormContent>
      </FormSection>
    </SplitContainer>
  );
};

// 스타일 컴포넌트
const SplitContainer = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageSection = styled.div`
  flex: 0 0 50%;
  background: linear-gradient(135deg, #0f172a, #334155);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('https://images.unsplash.com/photo-1622025885953-0965e413720a?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
    background-size: cover;
    background-position: center;
    opacity: 0.4;
  }
  
  @media (max-width: 768px) {
    min-height: 30vh;
    flex: 0 0 100%;
  }
`;

const OverlayContent = styled.div`
  position: relative;
  z-index: 1;
  padding: 2rem;
  color: white;
  text-align: center;
`;

const WelcomeTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const WelcomeText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 500px;
`;

const FormSection = styled.div`
  flex: 0 0 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 1rem;
    flex: 0 0 100%;
  }
`;

const FormContent = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 1rem;
`;

const LogoContainer = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${blue.blue9};
  display: inline-block;
  padding: 0.5rem 1rem;
  border: 2px solid ${blue.blue9};
  border-radius: 4px;
`;

const FormTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  color: ${blackA.blackA12};
  font-weight: 600;
`;

const FormSubtitle = styled.p`
  font-size: 0.875rem;
  color: ${mauve.mauve10};
  margin-bottom: 2rem;
`;

const FormRoot = styled(Form.Root)`
  width: 100%;
`;

const FormField = styled(Form.Field)`
  display: grid;
  margin-bottom: 1.5rem;
`;

const FormLabel = styled(Form.Label)`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${blackA.blackA12};
  margin-bottom: 0.5rem;
`;

const FormControl = styled(Form.Control)`
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid ${mauve.mauve7};
  border-radius: 8px;
  color: ${blackA.blackA12};
  background-color: white;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus {
    outline: none;
    border-color: ${blue.blue8};
    box-shadow: 0 0 0 2px ${blue.blue5};
  }

  &::placeholder {
    color: ${mauve.mauve9};
  }
`;

const FormMessage = styled(Form.Message)`
  font-size: 0.75rem;
  color: ${red.red11};
  margin-top: 0.25rem;
`;

const ForgotPassword = styled.a`
  display: block;
  text-align: right;
  font-size: 0.75rem;
  color: ${blue.blue11};
  margin-top: -0.5rem;
  margin-bottom: 1.5rem;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const FormSubmit = styled(Form.Submit)`
  width: 100%;
  padding: 0.75rem;
  background-color: ${blue.blue9};
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${blue.blue10};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${blue.blue7};
  }
`;

const SignupText = styled.p`
  font-size: 0.875rem;
  text-align: center;
  margin-top: 1.5rem;
  color: ${mauve.mauve11};
`;

const SignupLink = styled.a`
  color: ${blue.blue11};
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`;

export default Login;
