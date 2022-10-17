import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import AuthWrapper from '../components/AuthWrapper';
import '../styles/styles.css';

function CustomApp({ Component, pageProps: { session, ...pageProps } }) {
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
