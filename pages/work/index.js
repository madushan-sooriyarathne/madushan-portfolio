import { fetchEntries } from "../../contentful/contentfulFetch";

import Page from "../../components/layout/page/Page";
import WorkSection from "../../components/layout/work-section/WorkSection";

const Work = ({ works }) => {
  return (
    <Page>
      <WorkSection works={works} />
    </Page>
  );
};

const getStaticProps = async () => {
  const res = await fetchEntries("work");

  const works = res.map((entry) => {
    return {
      image: entry.fields.image.fields.file.url,
      name: entry.fields.name,
      type: entry.fields.type,
      status: entry.fields.status,
      workId: entry.fields.workId,
    };
  });

  return {
    props: { works },
  };
};

export { getStaticProps };
export default Work;
