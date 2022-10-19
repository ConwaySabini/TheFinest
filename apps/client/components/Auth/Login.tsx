import ContextProvider from '@/src/Context/Context';
import LoginForm from './LoginForm';

interface LoginProps {
  csrfToken: string;
  providers: object;
}

const Login = ({ csrfToken, providers }: LoginProps) => {
  return (
    <ContextProvider>
      <LoginForm providers={providers} csrfToken={csrfToken}></LoginForm>
    </ContextProvider>
  );
};

export default Login;
