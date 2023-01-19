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

      type ContentfulBlogPost implements ContentfulEntry & ContentfulReference & Node {
        body: contentfulBlogPostBodyTextNode!
      }

      type contentfulBlogPostBodyTextNode implements Node {
        childMarkdownRemark: MarkdownRemark! 
      }

      type MarkdownRemark implements Node {
        html: String!
      }
  `);
};
