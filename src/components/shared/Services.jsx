import React from "react";
import styled from "styled-components";
import { Column, Text, Title, Subtitle, Row } from "../../theme/index";

const Wrapper = styled.div`
  height: 100%;
  width: 85%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em 0;
  @media (max-width: 780px) {
    width: 95%;
    padding: 1em 0;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 50px;
  margin: 0 auto;
  margin-top: 2em;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-auto-rows: 495px;
  height: 100%;
  width: 80%;
  @media (max-width: 780px) {
    width: 95%;
    margin: 0;
  }
`;

const Div = styled.div`
  width: 100%;
  height: 100%;
  border: 0.5px solid #a1aeb7;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  cursor: pointer;
  transition: 750ms;
  &:hover {
    background: #f2f5f7;
  }
`;

const Icon = styled.i`
  font-size: 3.5em;
  color: #0070c0;
`;

const StyledRow = styled(Row)`
  justifycontent: space-between;
  alignitems: center;
  width: 75%;
  @media (max-width: 780px) {
    flex-direction: column;
    width: 95%;
    align-items: center;
  }
`;

const StyledTextRow = styled(Row)`
  width: 45%;
  @media (max-width: 780px) {
    width: 95%;
  }
`;

function Item({ title, text, icon }) {
  return (
    <Div>
      <Column width="85%" alignitems="center" textalign="center">
        <Icon className={icon} />
        <Subtitle primary>{title}</Subtitle>
        <Text secondary>{text}</Text>
      </Column>
    </Div>
  );
}

export default function Services() {
  const items = [
    {
      title: "What We Do",
      text:
        "Connect-IT 360 is a non-profit teaching our youth the essential building blocks to being successful in life. We bridge the gap between our youth and the business world to guide them through disruption and transformation.",
      icon: "fas fa-graduation-cap"
    },
    {
      title: "Our Why",
      text:
        "Founder Robyn Mussler was inspired by her sister Susie, who had Down Syndrome. The vision was to create Connect-IT 360, where everyone has a value, and the opportunity for a brighter future.",
      icon: "fas fa-award"
    },
    {
      title: "Our Promise to You",
      text:
        "Connect-IT 360 stays ahead of the curve to prepare our youth to face daily challenges, create products and services that influence the community, and change lives through innovation.",
      icon: "fas fa-briefcase"
    },
    {
      title: "Our Core Values",
      text:
        "Connect-IT 360 heart beats to create a community dedicated to embracing the value, growth, and the potential of every child. As a result, our youth can realize their #BestU.",
      icon: "fas fa-apple-alt"
    }
  ];
  return (
    <Wrapper id="what">
      <div style={{ height: "75px" }} />
      <StyledRow>
        <StyledTextRow>
          <Title>Stimulate Your Inspiration.</Title>
        </StyledTextRow>
        <StyledTextRow>
          <Text secondary>
            Strengthen Your Community. Create Unlimited Opportunity. Connect-IT
            360 is a non-profit teaching our youth the essential building blocks
            to being successful in life.
          </Text>
        </StyledTextRow>
      </StyledRow>
      <Grid>
        {items.map((key, index) => {
          return (
            <Item
              key={index}
              title={key.title}
              text={key.text}
              icon={key.icon}
            />
          );
        })}
      </Grid>
    </Wrapper>
  );
}
