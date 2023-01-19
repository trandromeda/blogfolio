import * as React from "react";
import { graphql, PageProps } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "@components/layout";
import Seo from "../../components/seo";
import { FileNode } from "gatsby-plugin-image/dist/src/components/hooks";

const BlogPost = (props: PageProps<Queries.ContentfulBlogPostQuery>) => {
  /** TS thinks children is undefined but it's clearly not. It should be a React.Element when a page is created by File System Route API  */
  const {
    data: { contentfulBlogPost },
  } = props;
  //   const heroImageNode = data.contentfulBlogPost?.hero_image as FileNode;
  //   const image = getImage(heroImageNode)!;
  return (
    <Layout pageTitle={contentfulBlogPost.title}>
      <p>{contentfulBlogPost.publishDate}</p>
      {/* <GatsbyImage image={image} alt="An image" /> */}

      <div
        className="body"
        dangerouslySetInnerHTML={{
          __html: contentfulBlogPost.body.childMarkdownRemark!.html!,
        }}
      />
    </Layout>
  );
};

export const query = graphql`
  query ContentfulBlogPost($id: String) {
    contentfulBlogPost(slug: { eq: $id }) {
      publishDate(formatString: "MMMM DD, YYYY")
      title
      body {
        body
        childMarkdownRemark {
          html
        }
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
