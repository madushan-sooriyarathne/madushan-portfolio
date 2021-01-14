import HeroBanner from "../components/layout/hero-banner/HeroBanner";
import Page from "../components/layout/page/Page";

const Home: React.FC = (): JSX.Element => {
  return (
    <Page>
      <HeroBanner />
    </Page>
  );
};

export default Home;
