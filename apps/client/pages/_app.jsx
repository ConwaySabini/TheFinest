import Head from 'next/head';
import '../styles/styles.css';
function CustomApp({ Component, pageProps }) {
    return (<>
      <Head>
        <title>Welcome to client!</title>
      </Head>
      <main className="app">
        <Component {...pageProps}/>
      </main>
    </>);
}
export default CustomApp;
//# sourceMappingURL=_app.jsx.map