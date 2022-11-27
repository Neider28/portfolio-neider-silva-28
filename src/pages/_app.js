import React from 'react';
import Head from 'next/head';
import { Layout } from '@containers/Layout.jsx';
import { AppContext } from '@context/AppContext.js';
import { useInitialState } from '@hooks/useInitialState.js';
import { Preload } from '@components/Preload.jsx';
import '@styles/globals.css';

function MyApp({ Component, pageProps }) {
  const initialState = useInitialState();
  const [load, setLoad] = React.useState(false);

  React.useEffect(() => {
    setTimeout(function () {
      setLoad(!load);
    }, 3000);
  }, []);

  return (
    <>
      <Head>
        <title>Portfolio | Neider Silva</title>
      </Head>
      <AppContext.Provider value={initialState}>
        {
          !load && (<Preload />)
        }
        {
          load && (
            <Layout>
              <Component {...pageProps} />
            </Layout>
          )
        }
      </AppContext.Provider>
    </>
  );
}

export default MyApp
