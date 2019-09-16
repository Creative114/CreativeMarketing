import React from "react";
import styled from "styled-components";
import { Column, Text, Title, Subtitle, Row, Button } from "../../theme/index";
import production from "../../assets/production.png";
import preproduction from "../../assets/preproduction.png";
import postproduction from "../../assets/postproduction.png";
import Reveal from "react-reveal/Reveal";

const Wrapper = styled.div`
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background: rgb(242, 245, 247);
  align-items: center;
  padding: 3.5em 0;
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
  width: 85%;
  margin-top: 2em;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: auto;
  height: 100%;
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

const StyledColumn = styled(Column)`
  justify-content: center;
  align-items: center;
  text-align: center;
  @media (max-width: 1100px) {
    margin: 1em auto;
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

export default function How({ toggleModal }) {
  const items = [
    {
      title: "Explore",
      text:
        "People are longing to feel something. Maximize your story’s emotional impact by diving into what you want others to feel and how you want them to respond.",
      img: preproduction
    },
    {
      title: "Express",
      text:
        "The most captivating narratives combine inspired words with unforgettable pictures. Awaken your audience through robust, cinematic storytelling.",
      img: production
    },
    {
      title: "Excite",
      text:
        "See your dream become a breathtaking reality, as you share your message on the world’s stage. Gain the recognition you deserve and the results you desire.",
      img: postproduction
    }
  ];
  return (
    <Wrapper>
      <Reveal effect="fadeIn">
        <StyledColumn>
          <Title>Here's how we do it</Title>
        </StyledColumn>
        <Grid>
          {items.map((key, index) => {
            return (
              <Item
                key={index}
                title={key.title}
                text={key.text}
                img={key.img}
              />
            );
          })}
        </Grid>
        <Row margin="2em 0 1em 0">
          <Button primary onClick={() => toggleModal("schedule")}>
            Schedule a call now
          </Button>
        </Row>
      </Reveal>
    </Wrapper>
  );
}
