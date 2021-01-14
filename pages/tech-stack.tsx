import { Entry } from "contentful";
import { fetchEntries } from "../contentful/contentfulFetch";

import Page from "../components/layout/page/Page";
import TechStackSection from "../components/layout/tech-stack-section/TechStackSection";
import { GetStaticProps, GetStaticPropsResult } from "next";

interface Props {
  stacks: TechStack[];
}

const TechStack: React.FC<Props> = ({ stacks }: Props): JSX.Element => {
  return (
    <Page>
      <TechStackSection stacks={stacks} />
    </Page>
  );
};

const getStaticProps: GetStaticProps = async (): Promise<
  GetStaticPropsResult<Props>
> => {
  // fetch TechStacks from contentful
  const res: Entry<ContentfulTechStackResult>[] = await fetchEntries<ContentfulTechStackResult>(
    "techStack"
  );

  const stacks: TechStack[] = res.map(
    (entry: Entry<ContentfulTechStackResult>): TechStack => {
      const items: StackItem[] = entry.fields.stackItems.map(
        (item: ContentfulStackItemResult): StackItem => ({
          name: item.fields.name,
          logo: item.fields.logo.fields.file.url,
          stackItemId: item.fields.stackItemId,
        })
      );
      return {
        stackName: entry.fields.stackName,
        stackId: entry.fields.stackId,
        stackItems: items,
      };
    }
  );

  return {
    props: { stacks },
  };
};

export { getStaticProps };
export default TechStack;
