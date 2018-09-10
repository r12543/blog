import React from "react";
import Link from "gatsby-link";
import { Container, Item } from "semantic-ui-react";

import "../styles/blog-listing.css";

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <Item.Group>
      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => {
          return (
            <Item>
              <Item.Content>
                <Item.Header as="a" href={post.frontmatter.path}>
                  {post.frontmatter.title}
                </Item.Header>
                <Item.Meta>{post.frontmatter.date}</Item.Meta>
                <Item.Description>
                  <p>{post.excerpt}</p>
                </Item.Description>
              </Item.Content>
            </Item>
          );
        })}
    </Item.Group>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;
