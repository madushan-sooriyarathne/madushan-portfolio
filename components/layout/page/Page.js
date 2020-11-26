import Head from "next/head";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import PageWrapper from "./PageStyles";

const Page = ({
  children,
  title = "madushan.dev | Full stack dev & creative designer",
}) => {
  return (
    <PageWrapper>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      {/* Nav Bar Here */}
      {children}
      <Footer />
    </PageWrapper>
  );
};

export default Page;
