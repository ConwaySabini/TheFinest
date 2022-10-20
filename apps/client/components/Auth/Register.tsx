import ContextProvider from '@/src/Context/Context';
import RegisterForm from './RegisterForm';

interface RegisterProps {
  csrfToken: string;
  providers: object;
}

const Register = ({ csrfToken, providers }: RegisterProps) => {
  return (
    <ContextProvider>
      <RegisterForm csrfToken={csrfToken} providers={providers}></RegisterForm>
    </ContextProvider>
  );
};

export default Register;
