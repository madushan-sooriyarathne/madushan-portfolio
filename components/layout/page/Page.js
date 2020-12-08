import PageOverlay from "../page-overlay/PageOverlay";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import { PageWrapper, ContentWrapper } from "./PageStyles";

const Page = ({ children }) => {
  return (
    <PageWrapper>
      <PageOverlay />
      <Header />
      <ContentWrapper>{children}</ContentWrapper>
      <Footer />
    </PageWrapper>
  );
};

export default Page;
