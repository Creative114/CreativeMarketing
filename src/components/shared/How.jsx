import React from "react";
import styled from "styled-components";
import { Column, Text, Title, Subtitle, Row, Button } from "../../theme/index";
import production from "../../assets/production.png";
import preproduction from "../../assets/preproduction.png";
import postproduction from "../../assets/postproduction.png";

const Wrapper = styled.div`
  height: 100%;
  width: 85%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3.5em 0 4em 0;
  @media (max-width: 780px) {
    width: 95%;
    padding: 1em 0;
    text-align: center;
    padding: 3em 0 1.5em 0;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 50px;
  margin: 0 auto;
  margin-top: 2em;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: auto;
  height: 100%;
  width: 90%;
  @media (max-width: 780px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-auto-rows: 375px;
    width: 95%;
    margin: 0 auto;
  }
`;

const Div = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: 750ms;
  text-align: center;
`;

const Image = styled.img`
  width: 150px;
  margin: 0.25em 0;
`;

const StyledRow = styled(Row)`
  justify-content: center;
  align-items: center;
  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
    margin: 1em auto;
    text-align: center;
  }
`;

function Item({ title, text, img }) {
  return (
    <Div>
      <Column width="85%" alignitems="center" textalign="center">
        <Image src={img} />
        <Subtitle primary>{title}</Subtitle>
        <Text secondary>{text}</Text>
      </Column>
    </Div>
  );
}

export default function How() {
  const items = [
    {
      title: "1: Pre-Production",
      text:
        "This is the most important stage. We build the foundation of the project after you submit the creative brief. We then create a logistical game plan and get ready to shoot.",
      img: preproduction
    },
    {
      title: "2: Production",
      text:
        "Lights, Camera, Action. Oh yeah!!! this is the fun part. We travel to the filming locations with our gears to capture all the footage that we need to tell your engaging stories.",
      img: production
    },
    {
      title: "3: Post-Production",
      text:
        "This is where we really shine. We bring the shots together into a cohesive story. We share first drafts to get your thoughts. We’re ready to give your customers goosebumps.",
      img: postproduction
    }
  ];
  return (
    <Wrapper>
      <StyledRow>
        <Title>3 steps to share your emotionally engaging stories.</Title>
      </StyledRow>
      <Grid>
        {items.map((key, index) => {
          return (
            <Item key={index} title={key.title} text={key.text} img={key.img} />
          );
        })}
      </Grid>
      <Row margin="2em 0">
        <Button primary>Start now</Button>
      </Row>
    </Wrapper>
  );
}
