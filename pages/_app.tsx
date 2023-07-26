import Layout from '@/components/Layout';
import '@/styles/globals.scss';
import type { AppProps } from 'next/app';

import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/*
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-5H18VW1W7E" />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-5H18VW1W7E');`,
        }}
      />
      */}

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
