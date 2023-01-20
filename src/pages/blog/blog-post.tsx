import * as React from "react";
import { graphql, Link, PageProps } from "gatsby";
// import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

import Layout from "@components/layout";
import Seo from "@components/seo";
import * as styles from "./blog.css";

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
  const { contentfulBlogPost } = data;
  //   const heroImageNode = data.contentfulBlogPost?.hero_image as FileNode;
  //   const image = getImage(heroImageNode)!;

  return (
    <Layout>
      <h1 className={styles.title}>{contentfulBlogPost.title}</h1>
      <p className={styles.date}>{contentfulBlogPost.publishDate}</p>
      {/* <GatsbyImage image={image} alt="An image" /> */}

      <div
        className="body"
        dangerouslySetInnerHTML={{
          __html: contentfulBlogPost.body!.childMarkdownRemark!.html!,
        }}
      />

      <div className={styles.nav}>
        {pageContext.next && (
          <div className={styles.left}>
            <Link to={`/blog/${pageContext.next?.slug}`}>
              <FaArrowLeft></FaArrowLeft>
              {pageContext.next?.title}
            </Link>
          </div>
        )}

        {pageContext.prev && (
          <div className={styles.right}>
            <Link to={`/blog/${pageContext.prev?.slug}`}>
              {pageContext.prev?.title}
              <FaArrowRight></FaArrowRight>
            </Link>
          </div>
        )}
      </div>
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
    }
  }
`;

export const Head = ({ data }: PageProps<Queries.ContentfulBlogPost>) => (
  <Seo title={data.title} />
);

export default BlogPost;
