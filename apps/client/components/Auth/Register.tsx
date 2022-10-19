import ContextProvider from '@/src/Context/Context';
import RegisterForm from './RegisterForm';

const Register = () => {
  return (
    <ContextProvider>
      <RegisterForm></RegisterForm>
    </ContextProvider>
  );
};

export default Register;
