import * as React from "react";
import { graphql, PageProps } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { FileNode } from "gatsby-plugin-image/dist/src/components/hooks";

const BlogPost = (props: PageProps<Queries.ContentfulBlogPostQuery>) => {
  /** TS thinks children is undefined but it's clearly not. It should be a React.Element when a page is created by File System Route API  */
  const { data, children } = props;
  const { contentfulBlogPost } = data;
  //   const heroImageNode = data.contentfulBlogPost?.hero_image as FileNode;
  //   const image = getImage(heroImageNode)!;
  console.log(props);
  return (
    <Layout pageTitle={contentfulBlogPost?.title}>
      <p>Posted: {contentfulBlogPost?.publishDate}</p>
      {/* <GatsbyImage image={image} alt="An image" /> */}
      {children}
      {contentfulBlogPost?.description?.description}
    </Layout>
  );
};

export const query = graphql`
  query ContentfulBlogPost($slug: String) {
    contentfulBlogPost(slug: { eq: $slug }) {
      publishDate(formatString: "MMMM DD, YYYY")
      title
      body {
        body
      }
      description {
        description
      }
    }
  }
`;

export const Head = ({ data }: PageProps<Queries.ContentfulBlogPost>) => (
  <Seo title={data.title} />
);

export default BlogPost;
