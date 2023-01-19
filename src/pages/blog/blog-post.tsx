import * as React from "react";
import { graphql, Link, PageProps } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "@components/layout";
import Seo from "@components/seo";

interface Props extends PageProps {
  pageContext: {
    id: string;
    pagePath: string;
    prev: Queries.ContentfulBlogPost;
    next: Queries.ContentfulBlogPost;
  };
  data: Queries.ContentfulBlogPostQuery;
}

const BlogPost = (props: Props) => {
  const { data, pageContext } = props;
  //   const heroImageNode = data.contentfulBlogPost?.hero_image as FileNode;
  //   const image = getImage(heroImageNode)!;
  const { contentfulBlogPost } = data;
  return (
    <Layout pageTitle={contentfulBlogPost.title}>
      <p>{contentfulBlogPost.publishDate}</p>
      {/* <GatsbyImage image={image} alt="An image" /> */}

      <div
        className="body"
        dangerouslySetInnerHTML={{
          __html: contentfulBlogPost.body!.childMarkdownRemark!.html!,
        }}
      />

      {pageContext.next && (
        <div>
          <Link to={`/blog/${pageContext.next?.slug}`}>Next</Link>
        </div>
      )}

      {pageContext.prev && (
        <div>
          <Link to={`/blog/${pageContext.prev?.slug}`}>Previous</Link>
        </div>
      )}
    </Layout>
  );
};

export const query = graphql`
  query ContentfulBlogPost($id: String) {
    contentfulBlogPost(id: { eq: $id }) {
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
