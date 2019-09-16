const path = require("path");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const post = path.resolve(`src/templates/post.js`);

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors, "ERROR");
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      let path = node.frontmatter.path;
      createPage({
        path: path,
        component: post,
        context: {} // additional data can be passed via context
      });
    });
  });
};
