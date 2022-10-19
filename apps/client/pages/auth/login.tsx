import Login from '@/components/Auth/Login';
import { getCsrfToken, getProviders } from 'next-auth/react';

interface SignInProps {
  csrfToken: string;
  providers: object;
}

const SignIn = ({ csrfToken, providers }: SignInProps) => {
  return (
    <>
      <Login csrfToken={csrfToken} providers={providers}></Login>
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
