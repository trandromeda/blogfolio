import * as React from "react";
import { graphql, PageProps } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";

type DataProps = {
  allFile: {
    nodes: Array<{
      name: string;
    }>;
  };
};

const BlogPage = ({ data }: PageProps<DataProps>) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {data.allFile.nodes.map((node) => {
          return <li key={node.name}>{node.name}</li>;
        })}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "pages" } }) {
      nodes {
        name
      }
    }
  }
`;

export const Head = () => <Seo title="My Blog Posts" />;

export default BlogPage;
