const path = require("path");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@styles": path.resolve(__dirname, "src/styles"),
        "@components": path.resolve(__dirname, "src/components"),
      },
    },
  });
};

exports.createSchemaCustomization = ({ actions }) => {
  actions.createTypes(`
      type ContentfulBlogPostQuery implements Node { 
        contentfulBlogPost: ContentfulBlogPost!
      }
  `);
};

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(
    `
      query allContentfulBlogPost {
        allContentfulBlogPost(sort: { publishDate: DESC }) {
          nodes {
            id
            description {
              description
            }
            publishDate(formatString: "MMMM DD, YYYY")
            slug
            title
            body {
              childMarkdownRemark {
                html
              }
            }
          }
        }
      }
    `
  );

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  // Create pages for each markdown file.
  const blogPostTemplate = path.resolve(`src/pages/blog/blog-post.tsx`);
  const posts = result.data.allContentfulBlogPost.nodes;
  posts.forEach((node, index) => {
    const path = node.slug;
    createPage({
      path: `blog/${path}/`,
      component: blogPostTemplate,
      context: {
        pagePath: path,
        id: node.id,
        prev: index === 0 ? null : posts[index - 1],
        next: index === posts.length - 1 ? null : posts[index + 1],
      },
    });
  });
};
