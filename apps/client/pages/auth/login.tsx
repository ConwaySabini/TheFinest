import LoginForm from '@/components/Auth/LoginForm';
import { getCsrfToken, getProviders } from 'next-auth/react';

interface SignInProps {
  csrfToken: string;
  providers: object;
}

const SignIn = ({ csrfToken, providers }: SignInProps) => {
  return (
    <>
      <LoginForm csrfToken={csrfToken} providers={providers}></LoginForm>
    </>
  );
};

export async function getServerSideProps(context) {
  const providers = await getProviders();
  const csrfToken = await getCsrfToken(context);
  console.log('providers: ', providers);

  return {
    props: { providers, csrfToken },
  };
}

export default SignIn;
