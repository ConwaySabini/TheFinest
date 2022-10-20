import Register from '@/components/Auth/Register';
import { getCsrfToken, getProviders } from 'next-auth/react';

interface SignUpProps {
  csrfToken: string;
  providers: object;
}

const SignUp = ({ csrfToken, providers }: SignUpProps) => {
  return (
    <>
      <Register csrfToken={csrfToken} providers={providers}></Register>
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

export default SignUp;
