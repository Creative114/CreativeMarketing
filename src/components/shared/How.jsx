import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Column, Text, SpanTitle, SpanSubtitle, Row, Button } from '../../theme/index';
import explore from '../../assets/Explore.svg';
import express from '../../assets/Express.svg';
import excite from '../../assets/Excite.svg';
import Reveal from 'react-reveal/Reveal';
import BG from '../../assets/rectange_bg.png';

const Wrapper = styled.div`
  height: auto;
  width: 100%;
  margin: 0 auto;
  background: ${(props) => props.bg};
  flex-direction: column;
  align-items: center;
  padding: 10em 0 2em 0;
  @media (max-width: 920px) {
    text-align: center;
    padding: 5em 0;
    padding-bottom: 0;
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
  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
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
        <SpanSubtitle primary>{title}</SpanSubtitle>
        <Text secondary>{text}</Text>
      </Column>
    </Div>
  );
}

export default function How({ toggleModal }) {
  const items = [
    {
      title: 'Explore',
      text:
        'People are longing to feel something. Maximize your story’s emotional impact by diving into what you want others to feel and how you want them to respond.',
      img: explore,
    },
    {
      title: 'Express',
      text:
        'The most captivating narratives combine inspired words with unforgettable pictures. Awaken your audience through robust, cinematic storytelling.',
      img: express,
    },
    {
      title: 'Excite',
      text:
        'See your dream become a breathtaking reality, as you share your message on the world’s stage. Gain the recognition you deserve and the results you desire.',
      img: excite,
    },
  ];
  return (
    <Wrapper bg={`url('${BG}')`}>
      <Reveal effect="fadeIn">
        <StyledColumn>
          <SpanTitle>Here's how we do it</SpanTitle>
        </StyledColumn>
        <Grid>
          {items.map((key, index) => {
            return <Item key={index} title={key.title} text={key.text} img={key.img} />;
          })}
        </Grid>
        <Row margin="3.5em 0 2em 0" justifycontent="center">
          <Link to="/launch">
            <Button primary smallText>
              Free Story Formula
            </Button>
          </Link>
        </Row>
      </Reveal>
    </Wrapper>
  );
}
