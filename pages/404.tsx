import Page from "../components/layout/page/Page";
import CustomErrorComponent from "../components/layout/custom-error-component/CustomErrorComponent";

const Custom404Error: React.FC = (): JSX.Element => {
  return (
    <Page>
      <CustomErrorComponent />
    </Page>
  );
};

export default Custom404Error;
