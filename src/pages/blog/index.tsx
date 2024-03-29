import * as React from "react";
import { graphql, Link, PageProps } from "gatsby";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import * as styles from "@styles/blog.css";

const BlogPage = ({ data }: PageProps<Queries.ContentfulBlogPostsQuery>) => {
  return (
    <Layout>
      <h1 className={styles.title}>Blog</h1>
      {data.allContentfulBlogPost.nodes.map((node) => (
        <article key={node.id}>
          <h2>
            <Link to={`/blog/${node.slug}`}>{node.title}</Link>
          </h2>
          <p>Posted: {node.publishDate}</p>
          <p>{node.description?.description}</p>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query ContentfulBlogPosts {
    allContentfulBlogPost(sort: { publishDate: DESC }) {
      nodes {
        id
        description {
          description
        }
        publishDate(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;

export const Head = () => <Seo title="My Blog Posts" />;

export default BlogPage;
