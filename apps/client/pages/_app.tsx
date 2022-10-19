import AuthWrapper from '@/components/Auth/AuthWrapper';
import '@/styles/styles.css';
import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/app';
import Head from 'next/head';

function CustomApp({ Component, pageProps: { session, ...pageProps } }: any) {
  return (
    <>
      <Head>
        <title>Welcome to TheFinest!</title>
      </Head>
      <main className="app">
        <SessionProvider session={session}>
          <AuthWrapper>
            <Component {...pageProps} />
          </AuthWrapper>
        </SessionProvider>
      </main>
    </>
  );
}

export default CustomApp;
