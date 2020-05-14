/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

const { fmImagesToRelative } = require("gatsby-remark-relative-images");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const posts = await graphql(`
    query GetPostList {
      allMarkdownRemark {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `);
  posts.data.allMarkdownRemark.nodes.forEach((post) => {
    createPage({
      path: post.fields.slug,
      component: path.resolve("./src/templates/blog-post.js"),
      context: {
        slug: post.fields.slug,
      },
    });
  });
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  fmImagesToRelative(node);
  if (node.internal.type === "MarkdownRemark") {
    const { createNodeField } = actions;
    const slug = createFilePath({ node, getNode });
    createNodeField({ node, name: "slug", value: slug });
  }
};
