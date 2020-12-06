import { fetchEntries } from "../contentful/contentfulFetch";

import Page from "../components/layout/page/Page";
import TechStackSection from "../components/layout/tech-stack-section/TechStackSection";

const TechStack = ({ stacks }) => {
  return (
    <Page>
      <TechStackSection stacks={stacks} />
    </Page>
  );
};

const getStaticProps = async () => {
  // fetch TechStacks from contentful
  const res = await fetchEntries("techStack");
  const stacks = res.map((entry) => {
    const items = entry.fields.stackItems.map((item) => ({
      name: item.fields.name,
      logo: item.fields.logo.fields.file.url,
      stackItemId: item.fields.stackItemId,
    }));
    return {
      stackName: entry.fields.stackName,
      stackId: entry.fields.stackId,
      stackItems: items,
    };
  });

  return {
    props: { stacks },
  };
};

export { getStaticProps };
export default TechStack;
