import AuthWrapper from '@/components/Auth/AuthWrapper';
import '@/styles/styles.css';
import { Provider } from 'jotai';
import { useAtomsDevtools } from 'jotai/devtools';
import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/app';
import Head from 'next/head';

function CustomApp({ Component, pageProps: { session, ...pageProps } }) {
  useAtomsDevtools('jotaiDevTools');
  return (
    <>
      <Head>
        <title>Welcome to TheFinest!</title>
      </Head>
      <main className="app">
        <SessionProvider session={session}>
          <AuthWrapper>
            <Provider>
              <Component {...pageProps} />
            </Provider>
          </AuthWrapper>
        </SessionProvider>
      </main>
    </>
  );
}

export default CustomApp;
