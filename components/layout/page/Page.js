import Head from "next/head";
import PageOverlay from "../page-overlay/PageOverlay";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import PageWrapper from "./PageStyles";

const Page = ({
  children,
  title = "madushan.dev | Full stack dev & creative designer",
}) => {
  return (
    <PageWrapper>
      <PageOverlay />
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      {children}
      <Footer />
    </PageWrapper>
  );
};

export default Page;
