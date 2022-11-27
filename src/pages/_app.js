import Head from 'next/head';
import { Layout } from '@containers/Layout.jsx';
import { AppContext } from '@context/AppContext.js';
import { useInitialState } from '@hooks/useInitialState.js';
import '@styles/globals.css';

function MyApp({ Component, pageProps }) {
  const initialState = useInitialState();

  return (
    <>
      <Head>
        <title>Portfolio | Neider Silva</title>
      </Head>
      <AppContext.Provider value={initialState}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppContext.Provider>
    </>
  );
}

export default MyApp
