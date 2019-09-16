import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import { graphql } from "gatsby";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 5em auto;
`;

const Information = styled.div`
  height: 100%;
  width: 40%;
  margin: 0 auto;
  margin-top: 6em;
  padding: 0 0.1em;
  max-width: 730px;
  @media (max-width: 1160px) {
    width: 50%;
  }
  @media (max-width: 960px) {
    width: 60%;
  }
  @media (max-width: 720px) {
    width: 75%;
  }
  @media (max-width: 500px) {
    width: 95%;
  }
`;

const Writing = ({ data }) => {
  const { markdownRemark } = data;
  const { html } = markdownRemark;
  return (
    <Layout>
      <div className="fadeIn">
        <Wrapper>
          <Information
            className="post"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </Wrapper>
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        subtitle
        splash {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

export default Writing;
