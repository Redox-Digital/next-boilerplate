import Layout from '@/components/Layout';
import type { AppProps } from 'next/app';
import localFont from 'next/font/local';
import '@/styles/globals.scss';
import Script from 'next/script';

const circular = localFont({
  src: [
    { path: '../fonts/circular/CircularStd-Book.otf', weight: '400', style: 'normal' },
    { path: '../fonts/circular/CircularStd-Medium.otf', weight: '500', style: 'normal' },
    { path: '../fonts/circular/CircularStd-Bold.otf', weight: '700', style: 'normal' },
    { path: '../fonts/circular/CircularStd-Black.otf', weight: '900', style: 'normal' },
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Google tag (gtag.js) */}
      {/* 
      <Script async src="https://www.googletagmanager.com/gtag/js?id=GKEY_DEV_REMPLACE_IT" />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-K20DW8RS8P');`,
        }}
      />
      */}

      <style jsx global>
        {`
          :root {
            --circular-font: ${circular.style.fontFamily};
          }
        `}
      </style>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
