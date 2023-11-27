import Layout from '@/components/Layout';
import type { AppProps } from 'next/app';
import '@/styles/globals.scss';

import { setCookie, getCookie } from '@/components/helpers/CookiesHelper';
import { useEffect, useState } from 'react';
import GAnalytics from '@/components/helpers/GAnalytics';
import CookiesPopUp from '@/components/helpers/CookiesPopUp';

import localFont from 'next/font/local';
import { Jost } from 'next/font/google';

const jost = Jost({ subsets: ['latin'] });
const jakarta = localFont({ src: './fonts/PlusJakartaSans-VariableFont_wght.ttf' });

export default function App({ Component, pageProps }: AppProps) {
  // const gKey = 'G-K20DW8RS8P';

  // const [cookiePolicy, setCookiePolicy] = useState<boolean | undefined>(undefined);

  /* Play once on page load;
  useEffect(() => {
    setCookiePolicy(getCookie('lpd') === 'true' || undefined);
    console.log(getCookie('lpd'));
  }, []);

  const handleCookiePolicy = (answer: boolean) => {
    setCookiePolicy(answer);
    if (answer) setCookie('lpd', answer ? 'true' : 'false', 60);
  };
  */

  return (
    <>
      {/* Google tag (gtag.js) */}
      {/* cookiePolicy && <GAnalytics gKey={gKey} /> */}

      <style jsx global>
        {`
          :root {
            --jost-font: ${jost.style.fontFamily};
            --jakarta-font: ${jakarta.style.fontFamily};
          }
        `}
      </style>

      {/* cookiePolicy === undefined && <CookiesPopUp handleCookiePolicy={handleCookiePolicy} /> */}

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
