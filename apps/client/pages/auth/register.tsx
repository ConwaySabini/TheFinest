import RegisterForm from '@/components/Auth/RegisterForm';
import { getCsrfToken, getProviders } from 'next-auth/react';

interface SignUpProps {
  csrfToken: string;
  providers: object;
}

const SignUp = ({ csrfToken, providers }: SignUpProps) => {
  return (
    <>
      <RegisterForm csrfToken={csrfToken} providers={providers}></RegisterForm>
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
