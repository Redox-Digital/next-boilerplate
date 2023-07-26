import Header from './Menu';
import Footer from './Footer';
import Head from 'next/head';
import Script from 'next/script';

type Props = {
  children: string | JSX.Element;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Script src="https://kit.fontawesome.com/71157948d4.js" />
      <Header />
      {children}
      <Footer />
    </>
  );
}
