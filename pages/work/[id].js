import { fetchEntries } from "../../contentful/contentfulFetch";

import Page from "../../components/layout/page/Page";
import ExpandedWorkItem from "../../components/layout/expanded-work-item/ExpandedWorkItem";

const WorkPage = ({ workItem }) => {
  return (
    <Page>
      <ExpandedWorkItem workItem={workItem} />
    </Page>
  );
};

const getStaticProps = async ({ params }) => {
  const pageId = params.id;

  const res = await fetchEntries("work");
  const workItem = res.filter((entry) => entry.fields.workId === pageId)[0]
    .fields;
  const techStack = workItem.stack.map((item) => ({
    name: item.fields.name,
    logo: item.fields.logo.fields.file.url,
    stackItemId: item.fields.stackItemId,
  }));

  return {
    props: {
      workItem: {
        name: workItem.name,
        type: workItem.type,
        status: workItem.status,
        image: workItem.image.fields.file.url,
        url: workItem.url,
        stack: techStack,
        workId: workItem.workId,
        description: workItem.description,
      },
    },
  };
};

const getStaticPaths = async () => {
  const res = await fetchEntries("work");
  const paths = res.map((entry) => ({
    params: {
      id: entry.fields.workId,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export { getStaticProps, getStaticPaths };

export default WorkPage;
