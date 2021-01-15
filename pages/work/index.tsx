import { fetchEntries } from "../../contentful/contentfulFetch";

import Page from "../../components/layout/page/Page";
import WorkSection from "../../components/layout/work-section/WorkSection";
import { GetStaticProps, GetStaticPropsResult } from "next";
import { Entry } from "contentful";

interface Props {
  works: WorkItem[];
}

const Work: React.FC<Props> = ({ works }: Props): JSX.Element => {
  return (
    <Page>
      <WorkSection works={works} />
    </Page>
  );
};

const getStaticProps: GetStaticProps = async (): Promise<
  GetStaticPropsResult<Props>
> => {
  const res: Entry<ContentfulWorkItemResult>[] = await fetchEntries<ContentfulWorkItemResult>(
    "work"
  );

  const works: WorkItem[] = res.map(
    (entry: Entry<ContentfulWorkItemResult>): WorkItem => {
      return {
        image: entry.fields.image.fields.file.url,
        name: entry.fields.name,
        type: entry.fields.type,
        status: entry.fields.status,
        workId: entry.fields.workId,
      };
    }
  );

  return {
    props: { works },
  };
};

export { getStaticProps };
export default Work;
