import { fetchEntries } from "../../contentful/contentfulFetch";

import Page from "../../components/layout/page/Page";
import ExpandedWorkItem from "../../components/layout/expanded-work-item/ExpandedWorkItem";
import {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";
import { Entry } from "contentful";

interface Props {
  workItem: DetailedWorkItem;
}

const WorkPage: React.FC<Props> = ({ workItem }: Props): JSX.Element => {
  return (
    <Page>
      <ExpandedWorkItem workItem={workItem} />
    </Page>
  );
};

const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext): Promise<GetStaticPropsResult<Props>> => {
  const pageId: string = (params as { id: string }).id;

  const res: Entry<ContentfulDetailedWorkItemResult>[] = await fetchEntries<ContentfulDetailedWorkItemResult>(
    "work"
  );

  const workItem: ContentfulDetailedWorkItemResult = res.filter(
    (entry: Entry<ContentfulDetailedWorkItemResult>) =>
      entry.fields.workId === pageId
  )[0].fields;

  const techStack: StackItem[] = workItem.stack.map(
    (item: Entry<ContentfulStackItemResult>): StackItem => ({
      name: item.fields.name,
      logo: item.fields.logo.fields.file.url,
      stackItemId: item.fields.stackItemId,
    })
  );

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

interface WorkRoute {
  params: { id: string };
}

const getStaticPaths: GetStaticPaths = async (): Promise<
  GetStaticPathsResult<{ id: string }>
> => {
  const res: Entry<ContentfulWorkItemResult>[] = await fetchEntries<ContentfulWorkItemResult>(
    "work"
  );

  const paths: WorkRoute[] = res.map(
    (entry: Entry<ContentfulWorkItemResult>): WorkRoute => ({
      params: {
        id: entry.fields.workId,
      },
    })
  );

  return {
    paths,
    fallback: false,
  };
};

export { getStaticProps, getStaticPaths };

export default WorkPage;
