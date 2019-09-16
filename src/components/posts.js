import React from "react";
import styled from "styled-components";
import { Link, graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";
import { Text, Subtitle, Button } from "../theme";
import { FaAngleRight } from "react-icons/fa";

const Wrapper = styled.div`
  width: 75%;
  max-width: 1600px;
  height: 100%;
  margin: 0em auto;
  display: flex;
  text-align: center;
  justify-content: space-between;
  @media (max-width: 920px) {
    flex-direction: column;
    width: 100%;
  }
`;

const PackageImage = styled(Img)`
  width: 100%;
  background: ${props => props.background};
  object-fit: contain;
  background-size: cover;
  background-position: center;
  border-radius: 4px;
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 50px;
  width: 90%;
  margin: 1em auto 0 auto;
  grid-template-columns: repeat(1fr);
  grid-auto-rows: auto;
  @media (max-width: 720px) {
    grid-auto-rows: auto;
    width: 85%;
  }
`;

const FullItemWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2em;
  border-radius: 8px;
  background-color: ${props => props.background};
  transition: 500ms;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.1);
  &:hover {
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.25);
    transform: translateY(-20px);
  }
}
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 50%;
`;

const ImgDiv = styled.div`
  width: 95%;
  max-width: 300px;
`;

const FullItem = ({ data }) => (
  <Link to={data.frontmatter.path}>
    <FullItemWrapper background={"#fff"}>
      <Div>
        <Subtitle white>{data.frontmatter.title}</Subtitle>
        <Text white>{data.frontmatter.subtitle}</Text>
        <Button item background={data.frontmatter.button}>
          <p style={{ color: "#505d68" }}>Read more</p>
          <FaAngleRight
            style={{
              color: "#505d68",
              height: "28px",
              width: "16px",
              marginLeft: ".5em"
            }}
          />
        </Button>
      </Div>
      <ImgDiv>
        <PackageImage
          alt={`William W Whatley ${data.title} Portfolio Image`}
          fluid={data.frontmatter.splash.childImageSharp.fluid}
        />
      </ImgDiv>
    </FullItemWrapper>
  </Link>
);

const Posts = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              id
              excerpt(pruneLength: 250)
              frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
                subtitle
                expertise
                type
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
        }
      }
    `}
    render={data => {
      return (
        <Wrapper>
          <Grid>
            {data.allMarkdownRemark.edges.map(edge => (
              <FullItem key={edge.node.id} data={edge.node} />
            ))}
          </Grid>
        </Wrapper>
      );
    }}
  />
);

export default Posts;
