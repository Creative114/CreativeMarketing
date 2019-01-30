import React from "react";
import styled from "styled-components";
import { Column, Text, Title, Row, Subtitle } from "../../theme/index";
import moment from "moment";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  height: 600px;
  width: 85%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4em 0;
  @media (max-width: 780px) {
    width: 95%;
    text-align: center;
    padding: 1em 0;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 25px;
  margin: 0 auto;
  margin-top: 2em;
  grid-template-columns: repeat(auto-fit, minmax(263px, 1fr));
  grid-auto-rows: 450px;
  height: 100%;
  width: 100%;
  @media (max-width: 780px) {
    width: 95%;
    margin: 0;
  }
`;

const Div = styled.div`
  width: 100%;
  height: 100%;
  border: 1.5px solid transparent;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: 750ms;
  filter: grayscale(75%);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  &:hover {
    filter: grayscale(0%);
    border: 1.5px solid #b9402d;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
`;

const StyledColumn = styled(Column)`
  padding: 0 1em;
  @media (max-width: 780px) {
    width: ${props => (props.text ? "95%" : "65%")};
    text-align: center;
  }
`;

function Post({ title, date, author, bannerImage, description }) {
  return (
    <Link to={`/impact/${title.toLowerCase()}`}>
      <Div>
        <Image src={bannerImage} />
        <StyledColumn>
          <Subtitle margin=".25em 0 0 0">{title}</Subtitle>
          <Row width="100%" justifycontent="space-between">
            <Text margin=".15em 0">{date}</Text>
            <Text margin=".15em 0">By: {author}</Text>
          </Row>
          <Text post>{description}</Text>
        </StyledColumn>
      </Div>
    </Link>
  );
}

export default function Posts({ posts }) {
  return (
    <Wrapper>
      <Column alignitems="center" textalign="center">
        <Title>Latest thoughts</Title>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor.
        </Text>
      </Column>
      {posts && posts.length >= 1 && (
        <Grid>
          {posts.map((key, index) => {
            return (
              <Post
                key={index}
                title={key.title}
                description={key.description}
                date={moment(key.date).format("MMM Do YY")}
                author={key.author}
                bannerImage={
                  key.bannerImage &&
                  `https://media.graphcms.com/${key.bannerImage.handle}`
                }
              />
            );
          })}
        </Grid>
      )}
      {posts && posts.length === 0 && (
        <Column alignitems="center" textalign="center" jusitfycontent="center">
          <Title>Coming soon!</Title>
        </Column>
      )}
    </Wrapper>
  );
}
