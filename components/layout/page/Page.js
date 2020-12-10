import PageOverlay from "../page-overlay/PageOverlay";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import { PageWrapper, ContentWrapper } from "./PageStyles";
import Floater from "../../floater/Floater";
import SnackBar from "../../snack-bar/SnackBar";

const Page = ({ children }) => {
  return (
    <PageWrapper>
      <PageOverlay />
      <Header />
      <ContentWrapper>{children}</ContentWrapper>
      <Footer />
      <Floater />
      <SnackBar />
    </PageWrapper>
  );
};

export default Page;
