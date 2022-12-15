import * as React from "react";
import { graphql, PageProps } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { FileNode } from "gatsby-plugin-image/dist/src/components/hooks";

const BlogPost = (props: PageProps<Queries.BlogPostPageQuery>) => {
  /** TS thinks children is undefined but it's clearly not. It should be a React.Element when a page is created by File System Route API  */
  const { data, children } = props;
  const heroImageNode = data.mdx?.frontmatter?.hero_image as FileNode;
  const image = getImage(heroImageNode)!;
  console.log(image);
  return (
    <Layout pageTitle={data.mdx?.frontmatter?.title}>
      <p>Posted: {data.mdx?.frontmatter?.date}</p>
      <GatsbyImage image={image} alt="An image" />
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
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export const Head = ({ data }: PageProps<Queries.BlogPostPageQuery>) => (
  <Seo title={data.mdx?.frontmatter?.title} />
);

export default BlogPost;
