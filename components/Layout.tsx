import Header from './navigation/Menu';
import Footer from './layouts/Footer';

type Props = {
  children: string | JSX.Element;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
