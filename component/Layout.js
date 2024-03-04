import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main id="main-layout">{children}</main>
      <Footer />
    </>
  );
}
