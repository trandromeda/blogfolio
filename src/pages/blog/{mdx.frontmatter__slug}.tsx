import * as React from "react";
import { graphql, PageProps } from "gatsby";
import Layout from "../../components/layout";
import Seo from "../../components/seo";

const BlogPost = ({
  data,
  children,
  ...props
}: PageProps<
  Queries.BlogPostPageQuery,
  { id: string; frontmatter__slug: string }
>) => {
  console.log(children);
  return (
    <Layout pageTitle={data.mdx?.frontmatter?.title}>
      <p>{data.mdx?.frontmatter?.date}</p>
      {children}
    </Layout>
  );
};

export const query = graphql`
  query BlogPostPage($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`;

export const Head = ({ data }: PageProps<Queries.BlogPostPageQuery>) => (
  <Seo title={data.mdx?.frontmatter?.title} />
);

export default BlogPost;
