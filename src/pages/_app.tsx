import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Router } from 'next/router';
import * as NProgress from 'nprogress';
import { globalStyles } from './global.styles';

Router.events.on('routeChangeComplete', () => {
  NProgress.done();
});

Router.events.on('routeChangeError', () => {
  NProgress.done();
});

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <>
      <Head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎮</text></svg>"
        />
        <meta name="title" content="Console-ing Passions 2023" />
        <meta
          name="description"
          content="Console-ing Passions 2023, organized by a team of feminist media scholars, will be held at the University of Calgary on June 2023."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="Console-ing Passions 2023" />
        <meta
          property="og:description"
          content="Console-ing Passions 2023, organized by a team of feminist media scholars, will be held at the University of Calgary on June 2023."
        />
        <meta
          property="og:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="Console-ing Passions 2023" />
        <meta
          property="twitter:description"
          content="Console-ing Passions 2023, organized by a team of feminist media scholars, will be held at the University of Calgary on June 2023."
        />
        <meta
          property="twitter:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
